using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularSampleApp.Data.Entities
{
	public class Proposal
	{
		public long Id { get; set; }
		public UserDetail Sender { get; set; }
		public Job Job { get; set; }
		public bool Accepted { get; set; }
		public decimal HourlyPrice { get; set; }
		public decimal FixedPrice { get; set; }
		public string CoverLetter { get; set; }
	}
}
