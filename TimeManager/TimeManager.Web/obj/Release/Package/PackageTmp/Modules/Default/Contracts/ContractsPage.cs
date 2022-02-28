
namespace TimeManager.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Contracts"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ContractsRow))]
    public class ContractsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Contracts/ContractsIndex.cshtml");
        }
    }
}