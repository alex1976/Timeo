
namespace TimeManager.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Timesheets"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TimesheetsRow))]
    public class TimesheetsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Timesheets/TimesheetsIndex.cshtml");
        }
    }
}