"""Generate w-xx css classes for the progress bars."""
from pathlib import Path

w: str = ".w-{num}(width:{num}%!important;opacity:0.99;)"
w_after: str = '.w-{num}::after(content:"{num}%";)'


def fill_template(num: int, template: str):
    return template.format(num=num).replace("(", "{").replace(")", "}")


def generate_class(num: int, has_after: bool):
    if has_after:
        return fill_template(num, w) + fill_template(num, w_after)
    else:
        return fill_template(num, w)


with open(Path("css").joinpath("w-progressbar.min.css"), "w+") as f:
    f.write("".join([generate_class(i, i > 0) for i in range(101)]))
