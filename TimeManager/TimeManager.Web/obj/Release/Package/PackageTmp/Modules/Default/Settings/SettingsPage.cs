
namespace TimeManager.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Settings"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SettingsRow))]
    public class SettingsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Settings/SettingsIndex.cshtml");
        }
    }
}