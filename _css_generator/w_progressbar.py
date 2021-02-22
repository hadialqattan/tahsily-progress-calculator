"""Generate w-xx css classes for the progress bars."""
from pathlib import Path

generation_stamp = """/* This file has been generated 
using css_generator/w_progressbar.py */\n\n"""

template: str = """.w-{num} (
  width: {num}% !important; 
)\n"""

with open(Path("css").joinpath("w_progressbar.css"), "w+") as f:
    f.writelines(
        [generation_stamp]
        + [
            template.format(num=i).replace("(", "{").replace(")", "}")
            for i in range(101)
        ]
    )
