
using Serenity.Extensibility;
using System.ComponentModel;

namespace TimeManager.Default
{
    [NestedPermissionKeys]
    public class PermissionKeys
    {
        [Description("[General]")]
        public const string General = "Default:General";

        [DisplayName("Contracts")]
        public class Contracts
        {
            //[Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(Read)]
            public const string Management = "Default:Contracts:Management";
            public const string Read = "Default:Contracts:Read";
            public const string Delete = "Default:Contracts:Delete";
        }

        [DisplayName("Activities")]
        public class Activities
        {
            //[Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(Read)]
            public const string Management = "Default:Activities:Management";
            public const string Read = "Default:Activities:Read";
            public const string Delete = "Default:Activities:Delete";
        }

        [DisplayName("Customers")]
        public class Customers
        {
            //[Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(Read)]
            public const string Management = "Default:Customers:Management";
            public const string Read = "Default:Customers:Read";
            public const string Delete = "Default:Customers:Delete";
        }

        [DisplayName("Employees")]
        public class Employees
        {
            //[Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(Read)]
            public const string Management = "Default:Employees:Management";
            public const string Read = "Default:Employees:Read";
            public const string Delete = "Default:Employees:Delete";
        }

        [DisplayName("Timesheets")]
        public class Timesheets
        {
            //[Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(Read)]
            public const string Management = "Default:Timesheets:Management";
            public const string Read = "Default:Timesheets:Read";
            public const string Delete = "Default:Timesheets:Delete";

            //[ImplicitPermission(General), ImplicitPermission(Read)]
            //public const string Delete = "Default:Timesheets:Delete";
            //[Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(Read)]
            //public const string Modify = "Default:Timesheets:Modify";
            //public const string Read = "Default:Timesheets:Read";
        }

        [DisplayName("Equipments")]
        public class Equipments
        {
            //[Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(Read)]
            public const string Management = "Default:Equipments:Management";
            public const string Read = "Default:Equipments:Read";
            public const string Delete = "Default:Equipments:Delete";
        }

        [DisplayName("EquipmentUsages")]
        public class EquipmentUsages
        {
            //[Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(Read)]
            public const string Management = "Default:EquipmentUsages:Management";
            public const string Read = "Default:EquipmentUsages:Read";
            public const string Delete = "Default:EquipmentUsages:Delete";
        }

        [DisplayName("EquipmentTypes")]
        public class EquipmentTypes
        {
            //[Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(Read)]
            public const string Management = "Default:EquipmentTypes:Management";
            public const string Read = "Default:EquipmentTypes:Read";
            public const string Delete = "Default:EquipmentTypes:Delete";
        }

        [DisplayName("TimesheetStateTypes")]
        public class TimesheetStateTypes
        {
            //[Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(Read)]
            public const string Management = "Default:TimesheetStateTypes:Management";
            public const string Read = "Default:TimesheetStateTypes:Read";
            public const string Delete = "Default:TimesheetStateTypes:Delete";
        }

        [DisplayName("Tags")]
        public class Tags
        {
            //[Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(Read)]
            public const string Management = "Default:Tags:Management";
            public const string Read = "Default:Tags:Read";
            public const string Delete = "Default:Tags:Delete";
        }

        [DisplayName("Priorities")]
        public class Priorities
        {
            //[Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(Read)]
            public const string Management = "Default:Priorities:Management";
            public const string Read = "Default:Priorities:Read";
            public const string Delete = "Default:Priorities:Delete";
        }

        [DisplayName("UnitOfMeasures")]
        public class UnitOfMeasures
        {
            //[Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(Read)]
            public const string Management = "Default:UnitOfMeasures:Management";
            public const string Read = "Default:UnitOfMeasures:Read";
            public const string Delete = "Default:UnitOfMeasures:Delete";
        }
    }
}
