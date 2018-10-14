using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularSampleApp.Data.Entities
{
	public class UserDetail
	{
		public long Id { get; set; }
		public IdentityUser User { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public Country Country { get; set; }
	}
}
