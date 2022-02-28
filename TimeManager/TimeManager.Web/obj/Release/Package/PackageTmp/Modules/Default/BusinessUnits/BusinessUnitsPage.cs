
namespace TimeManager.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/BusinessUnits"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BusinessUnitsRow))]
    public class BusinessUnitsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/BusinessUnits/BusinessUnitsIndex.cshtml");
        }
    }
}