
namespace TimeManager.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Priorities"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PrioritiesRow))]
    public class PrioritiesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Priorities/PrioritiesIndex.cshtml");
        }
    }
}