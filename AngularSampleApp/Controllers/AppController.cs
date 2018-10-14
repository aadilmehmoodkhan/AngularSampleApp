using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace AngularSampleApp.Controllers
{
	[Authorize]
	public class AppController : Controller
    {
		public AppController(SignInManager<IdentityUser> signInManager)
		{
			SignInManager = signInManager;
		}

		public SignInManager<IdentityUser> SignInManager { get; }

        public IActionResult Index()
        {
            return View();
        }

		public async Task<IActionResult> Logout()
		{
			await SignInManager.SignOutAsync();
			return RedirectToAction("Index", "Home");
		}
    }
}