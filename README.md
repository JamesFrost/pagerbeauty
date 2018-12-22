# Pager Beauty [![CircleCI](https://circleci.com/gh/sergiitk/pagerbeauty/tree/master.svg?style=shield)](https://circleci.com/gh/sergiitk/pagerbeauty/tree/master) [![dependencies Status](https://david-dm.org/sergiitk/pagerbeauty/status.svg)](https://david-dm.org/sergiitk/pagerbeauty) [![devDependencies Status](https://david-dm.org/sergiitk/pagerbeauty/dev-status.svg)](https://david-dm.org/sergiitk/pagerbeauty?type=dev)

Add concise PagerDuty on-calls widget to your dashboard

![PagerDuty On Call](https://user-images.githubusercontent.com/672669/46779296-1e233100-cce5-11e8-897c-b60f935e3ca8.png)

## Running
### Using Docker
Docker repo: [`sergiitk/pagerbeauty`](https://hub.docker.com/r/sergiitk/pagerbeauty)

```sh
docker run --rm -p 8080:8080 --env-file=.env -it sergiitk/pagerbeauty:latest
```

### Configuration

Configure PagerBeauty with `.env` file or by exporting environment variables:

```sh
# For Docker compatibility, do not placed quotation marks around the values.
# https://docs.docker.com/compose/env-file/

# PagerDuty API key
PAGERBEAUTY_PD_API_KEY=yourkey

# A list of schedule ids to load
PAGERBEAUTY_PD_SCHEDULES=SCHEDL1,SCHEDL2

# (Optional) How often to refresh schedules list, in minutes.
# Default: 10.
# PAGERBEAUTY_REFRESH_RATE_MINUTES=10

# (Optional) Highest logging level to include into application logs.
# One of: error, warn, info, verbose, debug, silly
# Default: info
# PAGERBEAUTY_LOG_LEVEL=verbose

# (Optional) Log format. One of:
# machine - Machine-readable JSON format
# human   - Human-readable colorized format
# Default: resolved to `human` for development and `machine` for production.
# PAGERBEAUTY_LOG_FORMAT=machine

# (Optional) Enable basic HTTP authentication
# Note: embedding iframes with basic HTTP auth is not supported by all browsers.
# PAGERBEAUTY_HTTP_USER=basic_username
# PAGERBEAUTY_HTTP_PASSWORD=basic_password
```

## Add to DataDog dashboard

![Add PagerDuty to DataDog dashboard](https://user-images.githubusercontent.com/672669/46853316-ad0a7900-cdcb-11e8-80b3-ddedb7c8f2eb.gif)

1. Open the schedules list in deployed app. Make sure the app is running behind HTTPS
2. Find the schedule you want to embed
3. Open your DataDog dashboard, click "Edit Board".
4. Drag "IFrame" widget to the board
5. Copy PagerBeauty URL of your schedule and paste to IFrame URL on DataDog board

## Roadmap

This project is under active development.

- [x] Load and process on-calls
- [x] JSON response
- [x] HTML response
- [x] HTML responsive layout
- [x] Basic autorefresh
- [x] MVP: Embed in DataDog dashboard as an iframe
- [x] Show dates in local time
- [x] Configurable refresh period
- [x] HTTP Basic Authentication
- [x] On-call TimeZone is loaded from the PagerDuty schedule settings
- [x] Application logging
- [x] Ajax refresh
- [ ] Automated Testing
- [ ] Automated builds
- [ ] Load all API pages
- [ ] Full README.md and examples
- [ ] Change color to red when an incident is triggered
- [ ] Next on duty
- [ ] Websocket refresh
- [ ] HTTP authentication bypass support for embeds

## Sponsors and Supporters

| [<img src="https://github.com/sergiitk/pagerbeauty/raw/master/.github/images/sponsors-jw-logo.svg?sanitize=true" height="70">](https://www.jwplayer.com/) |
|:---:|
| [<sub><b>JW Player</b></sub>](https://www.jwplayer.com/) |

## Contributing

[Contribution guide](CONTRIBUTING.md) and step-by-step local development instructions.

The source code of [Pager Beauty](https://github.com/sergiitk/pagerbeauty) is maintained by [@sergiitk](https://github.com/sergiitk).
It's an Open Source project under MIT License. Contributions are welcomed. Follow the usual GitHub Pull Request process.

[Be nice.](CODE_OF_CONDUCT.md)

#### Questions?
Ask me on Twitter: [@sergiitk](https://twitter.com/sergiitk)


## License

Pager Beauty is released under the [MIT License](https://opensource.org/licenses/MIT).
