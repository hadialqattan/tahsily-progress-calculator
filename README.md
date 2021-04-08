<h1 align="center" style="position: relative;">
    <img width="200" src="./src/assets/favicon.png"/><br>
    Tahsily Progress Calculator
</h1>

<h4 align="center">
    Tahsily's book progress tracker and calculator.
</h4>

<p align="center">
    <img alt="GitHub" src="https://img.shields.io/github/license/hadialqattan/tahsily-progress-calculator">
    <a href="https://deepscan.io/dashboard#view=project&tid=13457&pid=16621&bid=360134"><img src="https://deepscan.io/api/teams/13457/projects/16621/branches/360134/badge/grade.svg" alt="DeepScan grade"></a>
</p>

<p align="center">
    <a href="#installation">Installation</a> •
    <a href="#development">Development</a> •
    <a href="#contributing">Contributing</a> •
    <a href="#license">License</a>
</p>

## Installation

You can use it from the [offical website](https://hadialqattan.github.io/tahsily-progress-calculator/), also you can install its dependencies using `npm` to run it locally:

```sh
$ npm i
```

## Development

After doing the above installation process run this command to start serving it locally:

```sh
$ npm run start
```

To deploy your changes to `gh-pages` branch [create new release](https://docs.github.com/en/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release) (recommended) **or** run this command:

```sh
$ npm run build && ./deploy.sh dist/
```

## Contributing

Pull requests are welcome! For larger changes, especially structural ones, please open an issue first to discuss what you would like to change.

If you have a feature request, feel free to [open an issue](https://github.com/hadialqattan/tahsily-progress-calculator/issues)!

## License

This project is licensed under a [GPLv3](./LICENSE) license.
