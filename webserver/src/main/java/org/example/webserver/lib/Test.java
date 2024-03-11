package org.example.webserver.lib;

import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;

class Schedule {
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    Date startDate;

    public Schedule() {}

    public String getStartDate() {
        return startDate.toString();
    }

    public void setStartDate(String startDate) {
        this.startDate = Date.valueOf(startDate);
    }
}

public class Test {
    public static void main(String[] args) {
        Schedule schedule = new Schedule();

        schedule.setStartDate("2021-12-31");
        System.out.println(schedule.getStartDate());
    }
}
