#include <iostream>
#include <unistd.h>
#include <fcntl.h>
#include <fstream>
#include <string.h>

#include "mtfstream.h"
#include "personal_record.h"

using namespace std;

int main(void)
{
        mtfstream f;
        char heading[] = "mtfstream\n";
        char fname[80];
        char strValue[80];
        int intValue;
        float floatValue;
        double doubleValue;

        personal_record data_set[] = {
        {"Bob", "N12345678", 1970, 5, 30, 20000},
        {"Alice", "A87654321", 1987, 3, 20, 12000}
        };
