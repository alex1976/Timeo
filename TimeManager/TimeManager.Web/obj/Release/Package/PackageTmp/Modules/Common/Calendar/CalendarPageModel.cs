using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TimeManager.Common
{
    public class CalendarPageModel
    {
        public String id { get; set; }

        public String title { get; set; }

        public String start { get; set; }

        public String end { get; set; }

        public bool allDay { get; set; }

        public String url { get; set; }

        public String description { get; set; }

        public String color { get; set; }

        public int ActivityCount { get; set; }
    }
}