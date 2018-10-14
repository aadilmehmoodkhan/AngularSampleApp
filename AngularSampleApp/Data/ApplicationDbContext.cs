using System;
using System.Collections.Generic;
using System.Text;
using AngularSampleApp.Data.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AngularSampleApp.Data
{
	public class ApplicationDbContext : IdentityDbContext
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
			: base(options)
		{
		}

		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);
			builder.Entity<UserDetail>().ToTable("UserDetail");
			builder.Entity<Category>().ToTable("Category");
			builder.Entity<Job>().ToTable("Job");
			builder.Entity<Proposal>().ToTable("Proposal");
			builder.Entity<Skill>().ToTable("Skill");
		}

		public DbSet<UserDetail> UserDetails { get; set; }
		public DbSet<Category> Categories { get; set; }
		public DbSet<Job> Jobs { get; set; }
		public DbSet<Proposal> Proposals { get; set; }
		public DbSet<Skill> Skills { get; set; }
	}
}
