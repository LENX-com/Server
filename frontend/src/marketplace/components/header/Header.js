import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.gif';

const Header = () => {
  return (
    <header className="globalNav noDropdownTransition">
    <div className="container-lg">
      <ul className="navRoot">
        <li className="navSection logo">
          <a className="rootLink item-home colorize" href="/">
            <img className="max-w-6" src={logo} alt="logo" />
          </a>
        </li>
        <li className="navSection primary">
          <a className="rootLink item-products hasDropdown colorize" data-dropdown="products" href="#div">
            Products
          </a>
          <a className="rootLink item-developers hasDropdown colorize" data-dropdown="developers" href="#div">
            Developers
          </a>
          <a className="rootLink item-company hasDropdown colorize" data-dropdown="company" href="#div">
            Company
          </a>
        </li>
        <li className="navSection secondary">
          <a className="rootLink item-support colorize" href="https://support.stripe.com">
            Support
          </a>
          <a className="rootLink item-dashboard colorize" data-adroll-segment="submit_two" href="https://dashboard.stripe.com/login">
            Sign in
          </a>
        </li>
        <li className="navSection mobile">
          <a className="rootLink item-mobileMenu colorize" href="#div"><h2>Menu</h2></a>
          <div className="popup">
            <div className="popupContainer">
              <a className="popupCloseButton" href="#div">Close</a>
              <div className="mobileProducts">
                <h4>Products</h4>
                <div className="mobileProductsList">
                  <ul>
                    <li><a className="linkContainer item-payments" href="https://stripe.com/features">
                        <svg viewBox="0 0 48 48"><path fill="#87BBFD" className="hover-fillLight" d="M24 48C12.11 48 2.244 39.35.338 28H6.5V9H5.27C9.67 3.515 16.423 0 24 0c13.255 0 24 10.745 24 24S37.255 48 24 48z" /><path fill="#555ABF" className="hover-fillDark" d="M25 21v8H.526A24.082 24.082 0 0 1 0 24 23.908 23.908 0 0 1 6.116 8H31.5c.828 0 1.5.67 1.5 1.5V21h-8zm-10.502-8.995a6.497 6.497 0 1 0 0 12.994 6.497 6.497 0 0 0 0-12.996z" /><path fill="#FFF" d="M39.823 39.276a2.44 2.44 0 0 1-1.76.724H16.5a1.5 1.5 0 0 1-1.5-1.5v-18c0-.828.67-1.5 1.5-1.5h27.693a1.51 1.51 0 0 1 1.484 1.256c.21 1.217.323 2.467.323 3.744 0 5.936-2.355 11.32-6.177 15.276zM33.5 23.002a6.497 6.497 0 1 0 0 12.995 6.497 6.497 0 0 0 .002-12.994z" /></svg>Payments
                      </a></li>
                    <li><a className="linkContainer item-subscriptions" href="https://stripe.com/subscriptions">
                        <svg viewBox="0 0 48 48"><path fill="#74E4A2" className="hover-fillLight" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z" /><path fill="#FFF" d="M39.558 30.977c-6.23 6.225-16.304 6.194-22.535-.03l13.975-13.962c-6.232-6.224-16.335-6.224-22.567 0-4.043 4.04-5.456 9.712-4.247 14.896l-.654.174a21.89 21.89 0 0 1-1.536-8.61c.284-11.806 10.003-21.35 21.823-21.446 6.15-.05 11.72 2.42 15.744 6.438 6.23 6.226 6.23 16.318 0 22.542z" /><path fill="#159570" className="hover-fillDark" d="M33.653 21.413c1.43 5.336-1.735 10.82-7.068 12.25-5.332 1.43-10.814-1.736-12.242-7.072-1.43-5.334 1.735-10.82 7.068-12.25 5.334-1.43 10.815 1.738 12.244 7.074z" /></svg>Subscriptions
                      </a></li>
                    <li><a className="linkContainer item-connect" href="https://stripe.com/connect">
                        <svg viewBox="0 0 48 48"><path fill="#68D4F8" className="hover-fillLight" d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c1.363 0 2.698.12 4 .338V15h5v5h14.662c.218 1.302.338 2.637.338 4z" /><path fill="#FFF" d="M16.99 29.966L17 17l-5.55-.006a1.02 1.02 0 0 0-.725.3L2.65 25.446a1.55 1.55 0 0 0-.44 1.28c1.22 9.944 9.1 17.825 19.042 19.047.472.058.945-.104 1.28-.44l8.172-8.076c.192-.193.3-.453.3-.725L31 31l-12.985-.01a1.023 1.023 0 0 1-1.024-1.024z" /><path fill="#217AB7" className="hover-fillDark" d="M47.697 20.195L37.194 30.702a1.03 1.03 0 0 1-.726.3h-5.462V18.03c0-.567-.46-1.025-1.025-1.025H16.994V11.52c0-.274.108-.534.3-.726L27.783.3C38 1.916 46.07 9.98 47.698 20.194z" /></svg>Connect
                      </a></li>
                  </ul>
                  <ul>
                    <li><a className="linkContainer item-relay" href="https://stripe.com/relay">
                        <svg viewBox="0 0 48 48"><path fill="#FFA27B" className="hover-fillLight" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z" /><path fill="#C23D4B" className="hover-fillDark" d="M24 12.5c8.285 0 15 6.828 15 15.25S32.285 43 24 43c-8.284 0-15-6.828-15-15.25S15.716 12.5 24 12.5z" /><path fill="#FFF" d="M25 38.925v6.288a.787.787 0 0 1-.788.787h-.424a.787.787 0 0 1-.788-.788v-6.287c-3.668-.49-6.5-3.623-6.5-7.425a7.5 7.5 0 0 1 15 0c0 3.802-2.832 6.935-6.5 7.425z" /></svg>Relay
                      </a></li>
                    <li><a className="linkContainer item-atlas" href="https://stripe.com/atlas">
                        <svg viewBox="0 0 48 48"><path fill="#FCD669" className="hover-fillLight" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z" /><path fill="#CE7C3A" className="hover-fillDark" d="M24.012 1.834c.366.005.73.196.92.575l16.825 33.72c.396.79-.314 1.685-1.175 1.48L24 33.626V1.834h.01z" /><path fill="#FFF" d="M24 1.834v31.794l-16.584 3.98A1.043 1.043 0 0 1 6.24 36.13L23.067 2.41c.195-.39.572-.58.947-.576H24z" /></svg>Atlas
                      </a></li>
                    <li><a className="linkContainer item-radar" href="https://stripe.com/radar">
                        <svg viewBox="0 0 48 48"><path className="hover-fillLight" fill="#F6A4EB" d="M41.364 21.886h6.538c.06.697.098 1.4.098 2.114 0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c6.833 0 12.993 2.86 17.364 7.442v14.444z" /><path fill="#FFF" d="M37.746 37.4a1.3 1.3 0 0 1 .92-.38c.72 0 1.303.444 1.303 1.163 0 .503-.353.982-.708 1.292-3.484 3.122-8.325 5.53-13.783 5.53-11.75 0-19.486-9.538-19.486-18.83 0-8.72 7.195-16.19 15.25-16.19s11.227 5.54 11.227 5.54L37.747 37.4z" /><path className="hover-fillDark" fill="#9251AC" d="M47.995 24zm0 0c0-.995-.807-1.974-1.802-1.974-1.15 0-1.8.94-1.8 1.83-.09 3.174-1.228 7.127-3.453 10.182-2.355 3.232-6.91 6.956-13.242 6.956-7.625 0-13.213-5.767-13.213-11.925 0-4.3 2.886-7.17 5.828-7.17 1.588 0 2.48.683 2.965 1.312.362.468 1.063.493 1.482.074L40.968 7.032A23.926 23.926 0 0 1 47.995 24z" /></svg>Radar
                        <span className="new-badge">New</span>
                      </a></li>
                  </ul>
                </div>
              </div>
              <div className="mobileSecondaryNav">
                <ul>
                  <li>
                    <a className="item-pricing" href="https://stripe.com/pricing" data-analytics-action="pricing" data-action-source="mobile-nav">
                      Pricing
                    </a>
                  </li>
                  <li><a className="item-workswith" href="https://stripe.com/works-with">Works with Stripe</a></li>
                  <li><a className="item-gallery" href="https://stripe.com/customers">Customers</a></li>
                  <li><a className="item-documentation" href="https://stripe.com/docs">Documentation</a></li>
                </ul>
                <ul>
                  <li><a className="item-about" href="https://stripe.com/about">About Stripe</a></li>
                  <li><a className="item-jobs" href="https://stripe.com/jobs">Jobs</a></li>
                  <li><a className="item-blog" href="https://stripe.com/blog">Blog</a></li>
                </ul>
              </div>
              <a className="mobileSignIn" data-adroll-segment="submit_two" href="https://dashboard.stripe.com/login">Sign in</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div className="dropdownRoot">
      <div className="dropdownBackground" style={{transform: 'translateX(452px) scaleX(0.707692) scaleY(1.1075)'}}>
        <div className="alternateBackground" style={{transform: 'translateY(255.53px)'}} />
      </div>
      <div className="dropdownArrow" style={{transform: 'translateX(636px) rotate(45deg)'}} />
      <div className="dropdownContainer" style={{transform: 'translateX(452px)', width: '368px', height: '443px'}}>
        <div className="dropdownSection left" data-dropdown="products">
          <div className="dropdownContent">
            <div className="linkGroup">
              <ul className="productsGroup">
                <li><a className="linkContainer item-payments" href="https://stripe.com/payments">
                    <svg viewBox="0 0 48 48"><path fill="#87BBFD" className="hover-fillLight" d="M24 48C12.11 48 2.244 39.35.338 28H6.5V9H5.27C9.67 3.515 16.423 0 24 0c13.255 0 24 10.745 24 24S37.255 48 24 48z" /><path fill="#555ABF" className="hover-fillDark" d="M25 21v8H.526A24.082 24.082 0 0 1 0 24 23.908 23.908 0 0 1 6.116 8H31.5c.828 0 1.5.67 1.5 1.5V21h-8zm-10.502-8.995a6.497 6.497 0 1 0 0 12.994 6.497 6.497 0 0 0 0-12.996z" /><path fill="#FFF" d="M39.823 39.276a2.44 2.44 0 0 1-1.76.724H16.5a1.5 1.5 0 0 1-1.5-1.5v-18c0-.828.67-1.5 1.5-1.5h27.693a1.51 1.51 0 0 1 1.484 1.256c.21 1.217.323 2.467.323 3.744 0 5.936-2.355 11.32-6.177 15.276zM33.5 23.002a6.497 6.497 0 1 0 0 12.995 6.497 6.497 0 0 0 .002-12.994z" /></svg>
                    <div className="productLinkContent">
                      <h3 className="linkTitle">Payments</h3>
                      <p className="linkSub">A complete commerce toolkit, built for&nbsp;developers.</p>
                    </div>
                  </a></li>
                <li><a className="linkContainer item-subscriptions" href="https://stripe.com/subscriptions">
                    <svg viewBox="0 0 48 48"><path fill="#74E4A2" className="hover-fillLight" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z" /><path fill="#FFF" d="M39.558 30.977c-6.23 6.225-16.304 6.194-22.535-.03l13.975-13.962c-6.232-6.224-16.335-6.224-22.567 0-4.043 4.04-5.456 9.712-4.247 14.896l-.654.174a21.89 21.89 0 0 1-1.536-8.61c.284-11.806 10.003-21.35 21.823-21.446 6.15-.05 11.72 2.42 15.744 6.438 6.23 6.226 6.23 16.318 0 22.542z" /><path fill="#159570" className="hover-fillDark" d="M33.653 21.413c1.43 5.336-1.735 10.82-7.068 12.25-5.332 1.43-10.814-1.736-12.242-7.072-1.43-5.334 1.735-10.82 7.068-12.25 5.334-1.43 10.815 1.738 12.244 7.074z" /></svg>
                    <div className="productLinkContent">
                      <h3 className="linkTitle">Subscriptions</h3>
                      <p className="linkSub">The smart engine for recurring&nbsp;payments.</p>
                    </div>
                  </a></li>
                <li><a className="linkContainer item-connect" href="https://stripe.com/connect">
                    <svg viewBox="0 0 48 48"><path fill="#68D4F8" className="hover-fillLight" d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c1.363 0 2.698.12 4 .338V15h5v5h14.662c.218 1.302.338 2.637.338 4z" /><path fill="#FFF" d="M16.99 29.966L17 17l-5.55-.006a1.02 1.02 0 0 0-.725.3L2.65 25.446a1.55 1.55 0 0 0-.44 1.28c1.22 9.944 9.1 17.825 19.042 19.047.472.058.945-.104 1.28-.44l8.172-8.076c.192-.193.3-.453.3-.725L31 31l-12.985-.01a1.023 1.023 0 0 1-1.024-1.024z" /><path fill="#217AB7" className="hover-fillDark" d="M47.697 20.195L37.194 30.702a1.03 1.03 0 0 1-.726.3h-5.462V18.03c0-.567-.46-1.025-1.025-1.025H16.994V11.52c0-.274.108-.534.3-.726L27.783.3C38 1.916 46.07 9.98 47.698 20.194z" /></svg>
                    <div className="productLinkContent">
                      <h3 className="linkTitle">Connect</h3>
                      <p className="linkSub">Everything platforms need to get sellers&nbsp;paid.</p>
                    </div>
                  </a></li>
                <li><a className="linkContainer item-relay" href="https://stripe.com/relay">
                    <svg viewBox="0 0 48 48"><path fill="#FFA27B" className="hover-fillLight" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z" /><path fill="#C23D4B" className="hover-fillDark" d="M24 12.5c8.285 0 15 6.828 15 15.25S32.285 43 24 43c-8.284 0-15-6.828-15-15.25S15.716 12.5 24 12.5z" /><path fill="#FFF" d="M25 38.925v6.288a.787.787 0 0 1-.788.787h-.424a.787.787 0 0 1-.788-.788v-6.287c-3.668-.49-6.5-3.623-6.5-7.425a7.5 7.5 0 0 1 15 0c0 3.802-2.832 6.935-6.5 7.425z" /></svg>
                    <div className="productLinkContent">
                      <h3 className="linkTitle">Relay</h3>
                      <p className="linkSub">Sell your products in other mobile&nbsp;apps.</p>
                    </div>
                  </a></li>
                <li><a className="linkContainer item-atlas" href="https://stripe.com/atlas">
                    <svg viewBox="0 0 48 48"><path fill="#FCD669" className="hover-fillLight" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z" /><path fill="#CE7C3A" className="hover-fillDark" d="M24.012 1.834c.366.005.73.196.92.575l16.825 33.72c.396.79-.314 1.685-1.175 1.48L24 33.626V1.834h.01z" /><path fill="#FFF" d="M24 1.834v31.794l-16.584 3.98A1.043 1.043 0 0 1 6.24 36.13L23.067 2.41c.195-.39.572-.58.947-.576H24z" /></svg>
                    <div className="productLinkContent">
                      <h3 className="linkTitle">Atlas</h3>
                      <p className="linkSub">A new way to start an internet&nbsp;business.</p>
                    </div>
                  </a></li>
                <li><a className="linkContainer item-radar" href="https://stripe.com/radar">
                    <svg viewBox="0 0 48 48"><path className="hover-fillLight" fill="#F6A4EB" d="M41.364 21.886h6.538c.06.697.098 1.4.098 2.114 0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c6.833 0 12.993 2.86 17.364 7.442v14.444z" /><path fill="#FFF" d="M37.746 37.4a1.3 1.3 0 0 1 .92-.38c.72 0 1.303.444 1.303 1.163 0 .503-.353.982-.708 1.292-3.484 3.122-8.325 5.53-13.783 5.53-11.75 0-19.486-9.538-19.486-18.83 0-8.72 7.195-16.19 15.25-16.19s11.227 5.54 11.227 5.54L37.747 37.4z" /><path className="hover-fillDark" fill="#9251AC" d="M47.995 24zm0 0c0-.995-.807-1.974-1.802-1.974-1.15 0-1.8.94-1.8 1.83-.09 3.174-1.228 7.127-3.453 10.182-2.355 3.232-6.91 6.956-13.242 6.956-7.625 0-13.213-5.767-13.213-11.925 0-4.3 2.886-7.17 5.828-7.17 1.588 0 2.48.683 2.965 1.312.362.468 1.063.493 1.482.074L40.968 7.032A23.926 23.926 0 0 1 47.995 24z" /></svg>
                    <div className="productLinkContent">
                      <h3 className="linkTitle">Radar <span className="new-badge">New</span></h3>
                      <p className="linkSub">Modern tools to help beat fraud, integrated with your&nbsp;payments.</p>
                    </div>
                  </a></li>
              </ul>
            </div>
            <ul className="linkGroup linkList prodsubGroup">
              <li>
                <a className="linkContainer item-pricing" href="https://stripe.com/pricing" data-analytics-action="pricing" data-action-source="nav">
                  <h3 className="linkTitle linkIcon"><svg width={17} height={17}><path fill="#6772E5" className="hover-fillDark" d="M15.998 6.98c0 .24-.083.458-.217.635a1.373 1.373 0 0 1-.187.24l-7.736 7.742c-.534.534-1.4.534-1.934 0L1.41 11.08a1.37 1.37 0 0 1 0-1.935l7.736-7.743c.15-.15.33-.255.52-.32a.918.918 0 0 1 .16-.048c.136-.03.275-.034.412-.02l4.192.002c.867 0 1.57.665 1.57 1.486l-.002 4.48zm-2.366-3.62a1.254 1.254 0 0 0-1.772 1.77 1.254 1.254 0 0 0 1.772-1.77z" /><path fill="#87BBFD" className="hover-fillLight" d="M5.143 10.396l3.253-3.254c.2-.2.523-.2.722 0l.723.723c.2.2.2.524.003.723L6.59 11.842c-.2.2-.524.2-.724 0l-.723-.724a.51.51 0 0 1 0-.723z" /></svg>Pricing</h3>
                </a>
              </li>
              <li><a className="linkContainer item-workswith" href="https://stripe.com/works-with">
                  <h3 className="linkTitle linkIcon"><svg width={17} height={17}><path className="hover-fillLight" fill="#87BBFD" d="M15.998 12.495a1.03 1.03 0 0 1-.595.908L8.93 16.395a1.018 1.018 0 0 1-.86 0l-6.473-2.992a1.03 1.03 0 0 1-.594-.908V4.51c.006-.2.07-.39.18-.55L8.5 7.338l7.32-3.38c.108.16.172.35.178.55v7.984z" /><path className="hover-fillDark" fill="#6772E5" d="M15.998 12.495a1.03 1.03 0 0 1-.595.908L8.93 16.395a1.026 1.026 0 0 1-.43.095V7.34l7.32-3.38c.11.16.173.35.18.55v7.984z" /><path className="hover-fillLight" fill="#87BBFD" d="M8.5 5C6.567 5 5 4.228 5 3.275v-1.15h.098c.36.768 1.742 1.34 3.402 1.34 1.66.002 3.043-.572 3.402-1.34H12v1.15C12 4.228 10.433 5 8.5 5z" /></svg>Works with Stripe</h3>
                </a></li>
            </ul>
          </div>
        </div>
        <div className="dropdownSection active" data-dropdown="developers">
          <div className="dropdownContent">
            <div className="linkGroup documentationGroup">
              <a className="linkContainer withIcon item-documentation" href="https://stripe.com/docs">
                <h3 className="linkTitle linkIcon"><svg width={17} height={17}><path fill="#87BBFD" className="hover-fillLight" d="M.945 1.998h3.632C6.744 1.998 8.5 3.005 8.5 4.83v11.583c-.512 0-1.015-.337-1.33-.59-1.03-.828-3.057-.828-5.222-.828H.945A.944.944 0 0 1 0 14.052V2.944C0 2.422.423 2 .945 2z" /><path fill="#6772E5" className="hover-fillDark" d="M16.055 1.998h-3.632C10.257 1.998 8.5 3.005 8.5 4.83v11.583c.512 0 1.015-.337 1.33-.59 1.03-.828 3.057-.828 5.222-.828h1.003A.944.944 0 0 0 17 14.05V2.945A.944.944 0 0 0 16.055 2z" /></svg>Documentation</h3>
                <span className="linkSub">Start integrating Stripe’s products and&nbsp;tools.</span>
              </a>
              <div className="documentationArticles">
                <ul>
                  <li><h4>Get started</h4></li>
                  <li><a href="https://stripe.com/docs/custom-form">Stripe.js</a></li>
                  <li><a href="https://stripe.com/docs/checkout/tutorial">Checkout</a></li>
                  <li><a href="https://stripe.com/docs/mobile">Mobile apps</a></li>
                  <li><a href="https://stripe.com/docs/libraries">Libraries</a></li>
                </ul>
                <ul>
                  <li><h4>Popular topics</h4></li>
                  <li><a href="https://stripe.com/docs/apple-pay">Apple Pay</a></li>
                  <li><a href="https://stripe.com/docs/testing">Testing</a></li>
                  <li><a href="https://stripe.com/docs/checklist">Launch checklist</a></li>
                  <li><a href="https://stripe.com/docs/libraries#third-party-plugins">Plug-ins</a></li>
                </ul>
              </div>
            </div>
            <ul className="linkGroup linkList developersGroup">
              <li><a className="linkContainer item-apiReference" href="https://stripe.com/docs/api">
                  <h3 className="linkTitle linkIcon"><svg width={17} height={17}><path d="M2 15h13M2 11h13M2 7h13M2 3h13" fill="none" stroke="#6772e5" className="hover-strokeDark" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>Full API Reference</h3>
                </a></li>
              <li><a className="linkContainer item-apiStatus" href="https://status.stripe.com">
                  <h3 className="linkTitle linkIcon"><svg width={17} height={17}><path d="M1 9h2.95l3-6.5 3 12 3-5.45L16 9" fill="none" stroke="#6772e5" className="hover-strokeDark" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>API Status</h3>
                </a></li>
              <li><a className="linkContainer item-openSource" href="https://stripe.com/open-source">
                  <h3 className="linkTitle linkIcon"><svg width={17} height={17}><path fill="#6772E5" className="hover-fillDark" d="M8.5 17a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zM6.987 6.078a.684.684 0 0 0-.968-.968L3.116 8.012a.684.684 0 0 0 0 .967l2.9 2.9a.684.684 0 0 0 .97-.967l-2.42-2.418 2.42-2.42zm6.996 1.95L11.08 5.123a.684.684 0 0 0-.966.968l2.418 2.42-2.418 2.417a.684.684 0 0 0 .967.967l2.904-2.902a.684.684 0 0 0 0-.966z" /></svg>Open Source</h3>
                </a></li>
            </ul>
          </div>
        </div>
        <div className="dropdownSection right" data-dropdown="company">
          <div className="dropdownContent">
            <ul className="linkGroup linkList companyGroup">
              <li><a className="linkContainer item-about" href="https://stripe.com/about">
                  <h3 className="linkTitle linkIcon"><svg width={17} height={17}><path fill="#6772E5" className="hover-fillDark" d="M8.5 17a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm.178-10.89c.76 0 1.726.278 2.486.69V4.443c-.828-.33-1.656-.502-2.484-.502-2.028 0-3.41 1.06-3.41 2.83 0 2.77 3.8 2.32 3.8 3.513 0 .462-.37.612-.93.612-.827 0-1.867-.366-2.706-.823v2.388c.93.4 1.843.592 2.705.592 2.077 0 3.48-1.027 3.48-2.827 0-2.98-3.82-2.447-3.82-3.572-.003-.39.352-.542.877-.542z" /></svg>About Stripe</h3>
                </a></li>
              <li><a className="linkContainer item-customers" href="https://stripe.com/customers">
                  <h3 className="linkTitle linkIcon"><svg width={17} height={17}><path fill="#87BBFD" className="hover-fillLight" d="M2 16a1 1 0 0 1-1-1V9a4 4 0 0 1 8 0v7H2zm3-9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" /><path fill="#6772E5" className="hover-fillDark" d="M15 16H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h.55a2.5 2.5 0 0 1 4.9 0H15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1z" /><path fill="#87BBFD" className="hover-fillLight" d="M11 12h2v4h-2v-4z" /></svg>Customers</h3>
                </a></li>
              <li><a className="linkContainer item-jobs" href="https://stripe.com/jobs">
                  <h3 className="linkTitle linkIcon"><svg width={17} height={17}><path fill="#6772E5" className="hover-fillDark" d="M1.5 4h14c.828 0 1.5.67 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 0 13.5v-8C0 4.67.67 4 1.5 4z" /><path fill="#87BBFD" className="hover-fillLight" d="M13 15V4h2v11h-2zM2 4h2v11H2V4z" /><path fill="#6772E5" className="hover-fillDark" d="M11.5 3.5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1V4H4v-.5A2.5 2.5 0 0 1 6.5 1h4A2.5 2.5 0 0 1 13 3.5V4h-1.5v-.5z" /></svg>Jobs</h3>
                </a></li>
            </ul>
            <div className="linkGroup blogGroup">
              <a className="linkContainer withIcon item-blog" href="https://stripe.com/blog">
                <h3 className="linkTitle linkIcon"><svg width={17} height={17}><path fill="#87BBFD" className="hover-fillLight" d="M1 4h4.5v11H1.75A1.75 1.75 0 0 1 0 13.25V5a1 1 0 0 1 1-1z" /><path fill="#6772E5" className="hover-fillDark" d="M14 15H2v-.025a2.243 2.243 0 0 0 2-2.225V3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v9a3 3 0 0 1-3 3zm1-11H6v3h9V4z" /></svg>From the blog</h3>
              </a>
              <ul className="blogPosts">
                <li><a href="/blog/reproducible-research">
                    <span className="title ">Reproducible research: Stripe’s approach to data science</span>
                  </a></li>
                <li><a href="/blog/started-on-stripe-atlas">
                    <span className="title ">Started on Stripe Atlas</span>
                  </a></li>
                <li><a href="/blog/works-with-stripe">
                    <span className="title ">Works with Stripe</span>
                  </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;