using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularSampleApp.Data.Entities
{
    public class Job
    {
		public long Id { get; set; }
		public string Title { get; set; }
		public DateTime PostedDateTime { get; set; }
		public string Description { get; set; }
		public decimal FixedPrice { get; set; }
		public decimal HourlyPrice { get; set; }

		public ICollection<Category> Categories { get; set; }
		public ICollection<Skill> DesiredSkills { get; set; }
		public ICollection<Proposal> Proposals { get; set; }
	}
}
