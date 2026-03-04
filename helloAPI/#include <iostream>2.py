#include <iostream>
using namespace std;
class NumberInspector
{
    private:
        int x;
        bool a,b,c;
    public:
        void setNumber(int n)
        {
            x=n;
        }

        bool isEven()
        {
            if(x%2==0)
            {
                a=true;
            }
            else
            {
                a=false;
            }
            return a;
        }

        bool isPrime()
        {
            for(int i=0;i*i<x;i++)
            {
                if(x%i==0)
                {
                    b=false;
                }
                else
                {
                    b=true;
                }
                return b;
            }
        }

        bool isPerfectSquare()
        {
            for(int i=0;i*i<x;i++)
            {
                if(i*i==x)
                {
                    c=true;
                }
                else
                {
                    c=false;
                }
                return c;
            }
        }
        void show_data();

};
void NumberInspector::show_data()
{
    if(a)
    {
        cout << "1";
    }
    else
    {
        cout << "0";
    }
    cout << " ";
    if(b)
    {
        cout << "1";
    }
    else
    {
        cout << "0";
    }
    cout << " ";
    if(c)
    {
        cout << "1";
    }
    else
    {
        cout << "0";
    }
    cout << "\n";
    
}
int main()
{
    NumberInspector c;
    int x;
    while(cin >> x)
    {
        if(x<=0)
        {
            break;
        }
        if(c.isEven)
        {
            cout << "1";
        }
        c.isPrime;
        c.isPerfectSquare;
        c.show_data;
        
    }
    return 0;
}
