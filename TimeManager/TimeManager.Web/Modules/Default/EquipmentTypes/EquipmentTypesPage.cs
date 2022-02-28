
namespace TimeManager.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/EquipmentTypes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EquipmentTypesRow))]
    public class EquipmentTypesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/EquipmentTypes/EquipmentTypesIndex.cshtml");
        }
    }
}