using Microsoft.AspNetCore.Authorization;
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
    public class TestController : ControllerBase
    {
		[HttpGet]
		[Route("hc")]
		public async Task<IActionResult> HealthCheck()
			=> await Task.Run<IActionResult>(() => Ok(new { Message = "Health Check Fine" }));
    }
}
