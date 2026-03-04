#include <stdio.h>
#include "personal_record.h"

void print_record(personal_record record)
{
  printf ("Name: %s\n", record.name);
  printf ("ID: %s\n", record.ID);
  printf ("Birthday: %d/%d/%d\n", record.birth_year, record.birth_month, record.birth_day);
  printf ("Balance: %d\n", record.balance);
}
