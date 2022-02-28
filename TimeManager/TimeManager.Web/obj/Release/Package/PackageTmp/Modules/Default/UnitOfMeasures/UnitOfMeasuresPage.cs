
namespace TimeManager.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/UnitOfMeasures"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UnitOfMeasuresRow))]
    public class UnitOfMeasuresController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/UnitOfMeasures/UnitOfMeasuresIndex.cshtml");
        }
    }
}