
namespace TimeManager.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/TimesheetStateTypes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TimesheetStateTypesRow))]
    public class TimesheetStateTypesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/TimesheetStateTypes/TimesheetStateTypesIndex.cshtml");
        }
    }
}