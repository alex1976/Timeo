
namespace TimeManager.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Employees"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmployeesRow))]
    public class EmployeesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Employees/EmployeesIndex.cshtml");
        }
    }
}