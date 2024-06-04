import React from "react";
import "./Rules.css";

const Rules = () => {
  return (
    <div id="__next">
      <section className="hero">
        <div className="background-img gradient-overlay gradient-overlay-dark">
          <div className="parallax"></div>
        </div>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-10 col-lg-10">
              <div className="container height-70vh">
                <div className="row justify-content-center text-center">
                  <div className="col-12 col-md-10 col-lg-10">
                    <h1 className="display-4 mb-3 text-white">Rules</h1>
                    <p className="lead mb-5 text-white">
                      Subscribe to eYuM <br className="mb-0"></br>and join our
                      Discord Server today!
                    </p>
                    <span>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UC7oyDxYPvLI-uF4NeeLFleQ"
                      >
                        <img
                          loading="lazy"
                          width="60"
                          height="60"
                          decoding="async"
                          data-nimg="1"
                          className="enlarge"
                          src="../public/svg/YouTube_light_icon.svg"
                        />
                      </a>
                      <a
                        target="_blank"
                        href="https://discord.com/invite/bwMtMCdG24"
                      >
                        <img
                          loading="lazy"
                          width="70"
                          height="70"
                          decoding="async"
                          data-nimg="1"
                          className="enlarge"
                          src="../public/svg/Discord-Logo-Light.svg"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-azure spacer-double-sm mb-0 d-none d-lg-block py-4">
        <div class="card bg-transparent border-0">
          <div class="card-body p-0">
            <h1 class="text-white text-center mb-0">Server Rules</h1>
          </div>
        </div>
      </section>
      <div class="spacer-one-top-xs"></div>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className="mb-0 pb-5 text-dark">
                <div>
                  <h2 className="text-center mb-3 d-block -d-lg-none">
                    Server Rules
                  </h2>
                </div>
                <h3 className="text-center w-md-75 md-0 mx-auto mb-2 text-white">
                  Purpose
                </h3>
                <p
                  className="w-md-75 mb-0 mx-auto mb-2"
                  style={{ textAlign: "center" }}
                >
                  It is our mission to make eYuM's Lounge a safe and welcoming
                  place for all. Every day, people from around the would come
                  together and express themselves in eYuM's Lounge. It is our
                  goal to ensure all users have a valuable, inclusive, and
                  welcoming experience. These rules outline what is and isn't
                  allowed on our Discord Server.
                </p>
                <h3 className="text-center w-md-75 mb-0 mx-auto mb-2 text-white">
                  Preface
                </h3>
                <p className="w-md-75 mb-2 mx-auto">
                  <strong>I -</strong> All rules in the server apply at all
                  times and <em>in all places</em>. Most of the time, broken
                  rules result in a warning - these expire with time and add up
                  to punishments such as a mute or ban. Certain rules that are
                  broken may come with an immediate ban.
                </p>
                <p className="w-md-75 mb-2 mx-auto">
                  <strong>II -</strong> Propagating or influencing those that
                  have broken the rules may result in punishment. This includes
                  attempting to bait people into admitting they're under 13,
                  trying to make people spam ping you through a nickname, or
                  quoting/replying to rule-breaking messages.
                </p>
                <p className="mb-2 w-md-75 mx-auto">
                  <strong>III -</strong> Not all rules in the server are listed
                  on this page. Read the channel topic and pins of each channel
                  to view any channel-specific rules that may be present. If you
                  break rules in our Events server, you may also be subject to
                  punishment in both servers. Please use common sennse and avoid
                  trying to find "loopholes" in the rules, they are not
                  exhaustive and may apply to more circumstances beyond what is
                  listed here.
                </p>
                <p></p>
                <p className="mb-2 w-md-75 mx-auto">
                  <strong>IV -</strong> For moderation purposes, this server is{" "}
                  <strong>English only.</strong> This means you cannot use
                  ASCII, binary, morse code, ciphered code, or made-up languages
                  from games/movies.
                </p>
                <p></p>
                <p className="mb-2 w-md-75 mx-auto">
                  <strong>V -</strong> Plagiarism of any part of eYuM's Lounge
                  including the rules, icons, or banners is not allowed and will
                  result in a mod DMing you to change it as soon as possible. If
                  not done so, it will result in a ban from eYuM's Lounge. In
                  addition, please avoid distributing copyrighted content in the
                  server such as full movies or games.
                </p>
                <p className="mb-2 w-md-75 mx-auto">
                  <strong>VI -</strong> We may record voice channels or streams
                  in the server to be used privately as evidence in the event
                  something occurs that is against the rules, and by using or
                  VCs you give consent to this occurring.
                </p>
                <p></p>
                <p className="mb-3 w-md-75 mx-auto">
                  <strong>
                    We must also uphold Discord's{" "}
                    <a href="https://discord.com/new/terms">Terms of Service</a>{" "}
                    and{" "}
                    <a href="https://discord.com/new/guidelines">
                      Community Guidelines
                    </a>
                    .
                  </strong>
                </p>
                <h3 className=" w-md-75 mx-auto mb-0 text-white text-center">
                  Rules
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center ">
            <div className="text-toggle col-lg-10 pb-1">
              1. Swearing is allowed, but you are not allowed to swear
              excessively or use an unnecesarry amount of swearing against
              others in a harmful way.
            </div>
            <div className="text-toggle col-lg-10 pb-1">
              - You are also not allowed to use slurs or bypass out filter
              against them. "Bypassing" means changing the characters of a
              filtered word so our automod bots cannot detect what you have
              said. For example, incomplete slurs like n*****, f****t, and/or
              f*ck are not allowed.
            </div>
            <div className="text-toggle col-lg-10 pb-3">
              - Directing attention to slurs in other locations (e.g file names
              or stickers) are also not allowed.
            </div>
            <div className="text-toggle col-lg-10 pb-3">
              2. Advertising isn't allowed anywhere except within our designated
              advertising channels, and in these channels you cannot advertise
              anything that has NSFW or invite-for-rewards as its premise.
              Advertising is considered drawing attention to a server, product,
              or event for your own benefit. If you ask people to enter your DMs
              for an incentive such as nitro, we will assume you are advertising
              something. A link is not required for this to occur, and this is
              punishable whether in DMs or done verbally in the server.
            </div>
            <div className="text-toggle w-75 mx-auto mt-4 text-center">
              <p className="mb-0 small text-muted">
                If you have any questions about the rules or would like to
                report someone, please DM any staff member about it.
              </p>
            </div>
          </div>
        </div>
        <section className="spacer-one-top-md">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col ">
                <div className="mb-5 pb-5 text-center">
                  <h1 className="pb-3">Ready to join?</h1>
                  <a
                    className="text-white"
                    href="https://discord.com/invite/bwMtMCdG24"
                  >
                    <button
                      type="button"
                      className="btn btn-wide"
                      style={{
                        color: "rgb(255, 255, 255)",
                        background: "rgb(114, 137, 218)",
                      }}
                    >
                      Join Server
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <footer className="bg-dark spacer-double-md">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 d-flex align-items-start flex-column">
              <span className="d-inline-block mb-4">
                <img
                  src="../public/img/eyum-head.png"
                  alt="eYuM's Head"
                  loading="lazy"
                  width="80"
                  height="80"
                  decoding="async"
                  data-nimg="1"
                  className="footer-logo"
                  style={{ color: "transparent" }}
                ></img>
              </span>
              <p className="font-size-12 text-light">
                © 2024 All Rights Reserved - eYuM. <br></br>Made with ♥ by
                theeyum<br></br>Credits to SoundDrout for this webpage.
              </p>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-0">
              <h3 className="h6 text-white mb-3 font-weight-600">
                eYuM's Lounge
              </h3>
              <div className="list-group list-group-flush white">
                <a
                  className="list-group-item list-group-item-action"
                  href="/rules"
                >
                  Rules
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Rules;
