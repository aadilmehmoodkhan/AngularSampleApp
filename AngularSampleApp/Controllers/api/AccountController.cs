using AngularSampleApp.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularSampleApp.Controllers.api
{
	[Authorize]
	[Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
		[Route("hc")]
		public async Task<IActionResult> HealthCheck()
			=> await Task.Run<IActionResult>(() => Ok(new { Message = "Health Check Fine" }));


		[Route("loginPayload")]
		public async Task<IActionResult> GetLoginPayload()
			=> await Task.Run<IActionResult>(() => Ok(new
			{
				userName = User.Identity.Name
			}));
    }
}
