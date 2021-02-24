"""Generate w-xx css classes for the progress bars."""
from pathlib import Path

template: str = ".w-{num}(width:{num}%!important;)"

with open(Path("css").joinpath("w_progressbar.min.css"), "w+") as f:
    f.write(
        "".join(
            [
                template.format(num=i).replace("(", "{").replace(")", "}")
                for i in range(101)
            ]
        )
    )
