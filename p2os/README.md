p2os
====

P2OS ROS driver for Groovy/Hydro/Indigo(maybe?).

p2os_dashboard
--------------

This package holds the dashboard for the Robot. This serves as a tool to enable the motors, and view important messages from the P2OS Robots remotely. 
No catkin yet. 

p2os_driver
-----------

Essential to the P2OS is the driver. This controls the interface for the P2OS controller. 
What's working: driving, sonars, diasgnostics, gripper
What isn't working: bumpers, PTZ (if you have a bumper and want to help Tim fix it email him).
Catkin support!

p2os_launch
-----------

Relevant ROS launch files for the Robot. 
Catkin support!

p2os_teleop
-----------

Control the robot with a joystick or keyboard. 
Catkin support!

p2os_urdf
---------

Allows you to see the robot within RVIZ for navigation purposes. 
Catkin support!

To Do: 
------

* The gazebo_plugin node for controlling the differential drive was recently removed (commented out in the CMakeLists.txt file) from Gazebo. So, the P2OS gazebo launch file fails. 
* Update the rest of the packages to use the catkin build system instead of rosbuild.
* In p2os_driver: make SendReceive, or more specifically the Receive part, asynchronous to improve controller response time

