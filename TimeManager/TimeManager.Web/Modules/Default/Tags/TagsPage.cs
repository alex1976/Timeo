
namespace TimeManager.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Tags"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TagsRow))]
    public class TagsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Tags/TagsIndex.cshtml");
        }
    }
}