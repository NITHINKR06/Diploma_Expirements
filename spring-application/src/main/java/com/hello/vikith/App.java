package com.hello.vikith;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        ApplicationContext context=new ClassPathXmlApplicationContext("NewFile.xml");
        company ob=(company) context.getBean("s1");
        System.out.println(ob);
    }
}
