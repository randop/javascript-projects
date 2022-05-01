
#include <iostream>
#include <cstring>
#include <termios.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/ioctl.h>

//#include "TinyGPS.hpp"
//#include "TinyGPS++.hpp"

#define BAUDRATE9600 B9600
#define BAUDRATE115200 B115200

#define PORT "/dev/ttyUART0"

using namespace std;

std::string Serial::Read(unsigned char* buffer) {
	WaitForSingleObject(m_Mutex, INFINITE);
    DWORD bytesRead = 0;
    DWORD nNumberOfBytesToRead=1; // new
    char a=0;
    char *ptr=&a;
    char last=0;
    std::string output="";
    ReadFile(m_SerialHandle, ptr, nNumberOfBytesToRead, NULL, &m_Overlapped);
    GetOverlappedResult(m_SerialHandle, &m_Overlapped, &bytesRead, 1);
    if(a=='$')
    {
        last=a;
        ReadFile(m_SerialHandle, ptr, nNumberOfBytesToRead, NULL, &m_Overlapped);
        if(a=='G'||a=='P'||a=='S')
        {

            output+=last;
            output+=a;
            while (a!='\n')
            {

                ReadFile(m_SerialHandle, ptr, nNumberOfBytesToRead, NULL, &m_Overlapped);
                output+=a;

            }
        }
    }
    ReleaseMutex(m_Mutex);
    return output;
}

int main () {
	TinyGPSPlus gps;
	float lat = 0.0,lon = 0.0;

	init_millis();	

    int fd;
    fd = open(PORT, O_RDWR | O_NOCTTY | O_NDELAY);
    fcntl(fd, F_SETFL, FNDELAY);
    
    struct termios options;
    tcgetattr(fd, &options);
    cfsetispeed(&options, B115200);
    cfsetospeed(&options, B115200);
    options.c_cflag |= (CLOCAL | CREAD);
    options.c_cflag &= ~CRTSCTS;
    options.c_cflag &= ~CSIZE; /* Mask the character size bits */
    options.c_cflag |= CS8;    /* Select 8 data bits */
    options.c_iflag &= ~(IXON | IXOFF | IXANY);
    options.c_cc[VMIN]  = 0;
    options.c_cc[VTIME] = 10;
    tcsetattr(fd, TCSANOW, &options);
    
    char buffer[2048];  /* Input buffer */
    int  nbytes;     /* Number of bytes read */
    bool isDoneReading(false);
    unsigned int nSize = (int) sizeof(buffer);
    do {
        nbytes = read(fd, buffer, nSize);
		std::cout << buffer;
		usleep(1000);  
		/*
		if(gps.encode(nbytes)) {
			std::cout << "OK\n";
	    } else {
			std::cout << "ERR\n";
	    }
	    */
    } while (!isDoneReading);
    
    //std::cout << std::endl;
    
    close(fd);
    
    std::cout << std::endl << "DONE" << std::endl;
    return 0;
}