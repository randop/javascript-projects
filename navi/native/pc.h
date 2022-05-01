#ifndef __pc_h
#define __pc_h

/**
 * Native C equivalent to Arduino millis()
 * https://stackoverflow.com/questions/45306220/equivalent-to-arduino-millis
 */

#include <sys/time.h>
#include <stdio.h>
#include <unistd.h>
#include <cmath>

#define PI 3.1415926535897932384626433832795
#define HALF_PI 1.5707963267948966192313216916398
#define TWO_PI 6.283185307179586476925286766559
#define DEG_TO_RAD 0.017453292519943295769236907684886
#define RAD_TO_DEG 57.295779513082320876798154814105
#define EULER 2.718281828459045235360287471352

#define radians(deg) ((deg)*DEG_TO_RAD)
#define degrees(rad) ((rad)*RAD_TO_DEG)
#define sq(x) ((x)*(x))

struct timeval __millis_start;

void init_millis() {
    gettimeofday(&__millis_start, NULL);
};

unsigned long int millis() {
    long mtime, seconds, useconds; 
    struct timeval end;
    gettimeofday(&end, NULL);
    seconds  = end.tv_sec  - __millis_start.tv_sec;
    useconds = end.tv_usec - __millis_start.tv_usec;

    mtime = ((seconds) * 1000 + useconds/1000.0) + 0.5;
    return mtime;
};

#endif // def(__pc_h)