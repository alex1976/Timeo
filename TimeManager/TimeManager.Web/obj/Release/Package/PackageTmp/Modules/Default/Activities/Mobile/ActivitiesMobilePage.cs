
namespace TimeManager.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/ActivitiesMobile"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ActivitiesRow))]
    public class ActivitiesMobileController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Activities/Mobile/ActivitiesMobileIndex.cshtml");
        }

    }
}


