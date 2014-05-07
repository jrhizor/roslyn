/*
 *  P2OS for ROS
 *  Copyright (C) 2009
 *     David Feil-Seifer, Brian Gerkey, Kasper Stoy,
 *      Richard Vaughan, & Andrew Howard
 *
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program; if not, write to the Free Software
 *  Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 *
 */

#ifndef _P2OSDEVICE_H
#define _P2OSDEVICE_H

#include <pthread.h>
#include <sys/time.h>
#include <iostream>
#include <string.h>

#include "packet.h"
#include "robot_params.h"

#include "ros/ros.h"
#include "nav_msgs/Odometry.h"
#include "geometry_msgs/Twist.h"
#include <tf/transform_broadcaster.h>
#include <BatteryState.h>
#include <MotorState.h>
#include <GripperState.h>
#include <SonarArray.h>
#include <DIO.h>
#include <AIO.h>

#include <diagnostic_updater/publisher.h>
#include <diagnostic_updater/diagnostic_updater.h>

typedef struct ros_p2os_data
{
    nav_msgs::Odometry  position;
    p2os_driver::BatteryState batt;
    p2os_driver::MotorState motors;
    p2os_driver::GripperState gripper;
    p2os_driver::SonarArray sonar;
    p2os_driver::DIO dio;
    p2os_driver::AIO aio;
    geometry_msgs::TransformStamped odom_trans;
    std::string tf_prefix;
} ros_p2os_data_t;

// this is here because we need the above typedef's before including it.
#include "sip.h"	//is a data container

#include "p2os_ptz.h" //controls a camera

class SIP;


class P2OSNode
{
  public:
    P2OSNode( ros::NodeHandle n );
    virtual ~P2OSNode();

  public:
    int Setup();
    int Shutdown();

    int SendReceive(P2OSPacket* pkt, bool publish_data = true );

    void updateDiagnostics();

    void ResetRawPositions();
    void ToggleSonarPower(unsigned char val);
    void ToggleMotorPower(unsigned char val);
    void StandardSIPPutData(ros::Time ts);

    inline double TicksToDegrees (int joint, unsigned char ticks);
    inline unsigned char DegreesToTicks (int joint, double degrees);
    inline double TicksToRadians (int joint, unsigned char ticks);
    inline unsigned char RadiansToTicks (int joint, double rads);
    inline double RadsPerSectoSecsPerTick (int joint, double speed);
    inline double SecsPerTicktoRadsPerSec (int joint, double secs);

    void SendPulse (void);
    //void spin();
    void check_and_set_vel();
    void cmdvel_cb( const geometry_msgs::TwistConstPtr &);

    void check_and_set_motor_state();
    void cmdmotor_state( const p2os_driver::MotorStateConstPtr &);

    void check_and_set_gripper_state();
    void gripperCallback(const p2os_driver::GripperStateConstPtr &msg);
    double get_pulse() {return pulse_;}

		// diagnostic messages
		void check_voltage( diagnostic_updater::DiagnosticStatusWrapper &stat );
		void check_stall( diagnostic_updater::DiagnosticStatusWrapper &stat );

  protected:
    ros::NodeHandle n_;
    ros::NodeHandle nh_private_;

    diagnostic_updater::Updater diagnostic_;

    diagnostic_updater::DiagnosedPublisher<p2os_driver::BatteryState> batt_pub_;
    ros::Publisher pose_pub_, mstate_pub_, grip_state_pub_,
      ptz_state_pub_, sonar_pub_, aio_pub_, dio_pub_;
    ros::Subscriber cmdvel_sub_, cmdmstate_sub_, gripper_sub_, ptz_cmd_sub_;

    tf::TransformBroadcaster odom_broadcaster_;
    ros::WallTime last_velocity_send_time_;

    SIP* sippacket_;
    std::string psos_serial_port_;
    std::string psos_tcp_host_;
    int         psos_fd_;
    bool        psos_use_tcp_;
    int         psos_tcp_port_;
    bool        vel_dirty_, motor_dirty_;
    bool        gripper_dirty_;
    int         param_idx_;
    // PID settings
    int rot_kp_, rot_kv_, rot_ki_, trans_kp_, trans_kv_, trans_ki_;

    int bumpstall; // should we change the bumper-stall behavior?
    int joystick_;
    int direct_wheel_vel_control_;
    int radio_modemp_;

    int motor_max_speed_;
    int motor_max_turnspeed_;
    short motor_max_trans_accel, motor_max_trans_decel_;
    short motor_max_rot_accel, motor_max_rot_decel_;
    double pulse_; // Pulse time
    double desired_freq_;
    double lastPulseTime_; // Last time of sending a pulse or command to the robot
    bool use_sonar_;
    bool use_gripper_;
    bool use_ptz_;
    bool publish_diagnostics_;

    P2OSPtz ptz_;

  public:
    geometry_msgs::Twist cmdvel_;
    p2os_driver::MotorState    cmdmotor_state_;
    p2os_driver::GripperState gripper_state_;
    ros_p2os_data_t p2os_data;
};

#endif
