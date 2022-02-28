
namespace TimeManager.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/EquipmentUsages"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EquipmentUsagesRow))]
    public class EquipmentUsagesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/EquipmentUsages/EquipmentUsagesIndex.cshtml");
        }
    }
}