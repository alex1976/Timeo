
namespace TimeManager.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Activities"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ActivitiesRow))]
    public class ActivitiesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Activities/ActivitiesIndex.cshtml");
        }
    }
}