using Serenity.Navigation;
using Administration = TimeManager.Administration.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]
[assembly: NavigationLink(1100, "Calendar", url: "~/Calendar", permission: "", icon: "fa-calendar")]
[assembly: NavigationLink(1200, "Map", url: "~/Map", permission: "", icon: "fa-map")]
