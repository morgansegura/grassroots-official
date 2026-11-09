"""Giving Tuesday (December 1) and year-end giving, 2026, for Google Ads Editor.

Lands on /donate. Bids Maximize conversions, like campaigns 02–04 since
November 9, so the Ad Grant's $2 cap doesn't apply. Run from this folder: python3 build-giving-campaign.py
"""

from campaign_csv import two_ads, write

URL = "https://grassrootsfdn.org/donate"
NAME = "05 – Giving Tuesday & Year-End 2026"
BUDGET = 40

NEG = ["jobs", "volunteer abroad", "car donation", "clothing donation", "used equipment",
       "furniture donation", "blood donation", "food bank", "toy drive", "salary",
       "free money", "grants for individuals", "gofundme", "scholarship essay"]

COMMON = ["Give on Giving Tuesday", "Help a Kid Play Club Soccer", "San Diego County Nonprofit",
          "100% Tax-Deductible", "Fund a Season's Tuition", "Kits, Cleats and Tuition",
          "Access, the Goal", "Grassroots Foundation", "Need-Based Scholarships",
          "Founding Donor Class of '26", "Give Once or Monthly", "Year-End Giving, Made Easy"]

DESC = ["This Giving Tuesday, help a San Diego kid play club soccer. Give once or monthly.",
        "Grassroots Foundation is a 501(c)(3), EIN 35-2822183. Gifts are 100% tax-deductible.",
        "Club soccer costs $2,500 to $4,500 a season. Your gift covers tuition, kit and cleats.",
        "Give before December 31 for this year's taxes. Monthly gifts keep kids on the field."]

GROUPS = [
    dict(name="5A — Giving Tuesday", kw=["giving tuesday", "giving tuesday donation",
         "giving tuesday nonprofits", "giving tuesday san diego", "donate on giving tuesday",
         "giving tuesday youth sports"],
         ads=two_ads(["Giving Tuesday Is December 1", "Give This Giving Tuesday"],
                     COMMON, DESC, URL, "Giving", "Tuesday")),
    dict(name="5B — Year-end giving", kw=["year end donation", "year end giving",
         "tax deductible donation", "donate before end of year", "end of year charitable giving",
         "charitable donation tax deduction"],
         ads=two_ads(["Give Before December 31", "A Year-End Gift That Counts"],
                     COMMON, DESC, URL, "Donate", "Year-End")),
    dict(name="5C — Local giving", kw=["donate to youth sports san diego", "san diego charities to donate to",
         "youth sports scholarships donate", "local charities san diego", "youth charity san diego",
         "sponsor a kid sports"],
         ads=two_ads(["Give Close to Home", "A San Diego Youth Nonprofit"],
                     COMMON, DESC, URL, "Donate", "Local")),
]

write("2026-11-09-giving-tuesday-and-year-end.csv", NAME, BUDGET, NEG, GROUPS,
      bid="Maximize conversions", languages="en;es")
