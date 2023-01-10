<template>
  <div class="w-full">
    <!-- Hero section -->
    <section id="hero" class="md:justify-end flex flex-col justify-center pt-20 bg-gradient-to-bl from brand to-yellow-500 h-screen pb-8 lg:overflow-hidden relative">
      <BaseSection>
        <div class="col-span-12 lg:col-span-9 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <span data-aos="fade-right" data-aos-once="true" class="text-base text-gradient font-semibold uppercase"
            >Join us Today</span
          >
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            The World's <span class="text-header-gradient">First AI supported</span>  Telegram Bot
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
            <b>J</b>ust <b>A</b> <b>R</b>ather <b>V</b>ery <b>I</b>ntelligent <b>S</b>ystem
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
          <div class="flex justify-start space-x-6 socials mt-6 pb-7 text-dark">
            <a href="https://t.me/beeperc" target="_blank" rel="noopener noreferrer">
              <span class="sr-only">Telegram</span>
              <svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6 fill-current" aria-hidden="true">
                <path fill-rule="evenodd" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="https://twitter.com/BeepERC20" target="_blank" rel="noopener noreferrer">
              <span class="sr-only">Twitter Projekt</span>
              <svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6 fill-current" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
              <a href="https://twitter.com/BeepRaider" target="_blank" rel="noopener noreferrer">
              <span class="sr-only">Twitter Raid</span>
              <svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6 fill-current" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </div>
            <BaseButton
              class="w-auto max-w-[25rem] inline-flex items-center justify-between text-dark border-dark rounded-full text-sm hover:text-gray-200 hover:bg-dark hover:cursor-copy overflow-hidden p-1 pr-2 vorder-2 contract"
            >
              <span class="sr-only">Click to copy bsc address</span>
              <img src="data:image/png;base64,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" class="w-6 h-6">
              <span class="ml-2 text-sm w-auto text-ellipsis overflow-hidden">0x6aac56305825f712fd44599e59f2ede51d42c3e7</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4 h-4 ml-1"><path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z"></path><path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z"></path></svg>
            </BaseButton>
            <BaseButton
              class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
            >
              <span>Download App</span>
              <ChevronDownIcon :size="20" class="mt-1 text-[#0c66ee]" />
            </BaseButton>
          </div>
        </div>
        <div class="hidden sm:block col-span-12 lg:col-span-6">
          <div class="w-full">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              :src="require('~/assets/img/hero-image.webp')"
              class="-mt-4"
              alt=""
            />
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-1.png')"
          class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-2.png')"
          class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-3.png')"
          class="hidden sm:block absolute bottom-56 right-24 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/star.png')"
          class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
        />
      </BaseSection>
    </section>

    <!-- Crypto statistic section -->
    <section
      class="max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12"
    >
      <div class="w-full flex flex-col lg:flex-row items-center justify-center">
        <LandingCryptoStatistic
          data-aos="fade-up"
          title="🔥 Trending"
          :datasets="trendings"
          class="xl:border-r border-gray-200 lg:px-8"
        />
        <LandingCryptoStatistic
          data-aos="fade-up"
          data-aos-delay="150"
          title="🚀 Top Gainers"
          :datasets="topGainers"
          class="xl:border-r border-gray-200 lg:px-8"
        />
        <LandingCryptoStatistic
          data-aos="fade-up"
          data-aos-delay="300"
          title="💎 Recently Added"
          :datasets="recents"
          class="lg:px-8"
        />
      </div>
    </section>

    <!-- Buy and trade section -->
    <section class="w-full my-24">
      <BaseSection>
        <LandingBuyTradeImage class="sm:hidden mb-8" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-4xl font-semibold sm:pr-8 xl:pr-12">
            Buy & trade on the <br class="hidden sm:block" />
            original crypto exchange.
          </h2>
          <p class="paragraph">
            Buy now and get 40% extra bonus Minimum pre-sale amount 25 Crypto Coin. We accept BTC crypto-currency
          </p>
          <div class="space-y-6 lg:pr-12">
            <LandingExchange
              title="Amount"
              name="amount"
              type="number"
              default-value="5.000"
              :exchange-selected="currencySelected"
              :exchanges="currencies"
            />
            <LandingExchange
              title="Get"
              name="get"
              type="number"
              default-value="0.10901"
              :exchange-selected="cryptoSelected"
              :exchanges="cryptocurrencies"
            />
            <BaseButton class="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">Buy Now</BaseButton>
          </div>
        </div>
        <LandingBuyTradeImage data-aos="fade-left" class="hidden sm:block" />
      </BaseSection>
    </section>

    <!-- Partners section -->
    <section class="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
        <h3 data-aos="flip-down" class="text-2xl text-neutral-800 font-semibold">Trusted Partners Worldwide</h3>
        <p data-aos="flip-down" class="paragraph">We're partners with countless major organisations around the globe</p>
        <div data-aos="fade-up" class="flex flex-wrap items-center justify-center">
          <LandingPartnerImage
            v-for="img in ['clever.png', 'diamon-cutts.png', 'swiss-finance.png', 'gambio.png']"
            :key="img"
            :img="img"
          />
        </div>
      </div>
    </section>

    <!-- Credit card section -->
    <section class="w-full my-36">
      <BaseSection data-aos="fade-down">
        <div class="col-span-12 lg:col-span-7">
          <div class="w-full">
            <img :src="require('~/assets/img/nefa-cc.webp')" class="w-[95%]" alt="" />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
          <h2 class="text-4xl font-semibold">
            Introducing the <span class="text-header-gradient">NEFA</span> Credit Card
          </h2>
          <p class="paragraph">Subject to cardholder and rewards terms which will be available at application.</p>
          <ul class="space-y-4 sm:space-y-2">
            <LandingListItem title="Up to 3% back on purchases" />
            <LandingListItem title="Earn rewards in bitcoin or any crypto on NEFA" />
            <LandingListItem title="No annual fee" />
          </ul>
          <BaseButton
            class="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base"
            >Join the waitlist</BaseButton
          >
        </div>
      </BaseSection>
    </section>

    <!-- Advanced trading tools section -->
    <section class="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <LandingTradingToolImage class="sm:hidden" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
          <h2 class="text-4xl font-semibold">Advanced Trading <span class="text-header-gradient">Tools</span></h2>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Professional Access, Non-stop Availability</h4>
            <p class="paragraph text-sm xl:text-base">
              We provide premium access to crypto trading for both individuals and institutions through high liquidity,
              reliable order execution and constant uptime.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">A Range of Powerful Apis</h4>
            <p class="paragraph text-sm xl:text-base">
              Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and
              HTTP APIs. Connect to our WebSocket for real-time data streaming.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Customer Support</h4>
            <p class="paragraph text-sm xl:text-base">
              Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers
              for partners.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row">
            <BaseButton class="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base">
              Get Started
            </BaseButton>
            <BaseButton class="bg-inherit text-[#4A8FF6] px-10 py-4 text-center underline rounded-full">
              Learn More
            </BaseButton>
          </div>
        </div>
        <LandingTradingToolImage data-aos="fade-left" class="hidden sm:block" />
      </div>
    </section>

    <!-- Industry-leading security section -->
    <section class="w-full my-24">
      <div class="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="require('~/assets/img/industry-leading-security.webp')" class="w-full" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" class="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8">
          <h2 class="text-4xl font-semibold">Industry-leading security from day one</h2>
          <ul class="space-y-8 sm:space-y-4">
            <LandingListItem title="Safety, security and compliance">
              <p class="text-sm text-gray-700 leading-relaxed">
                NEFA is a licensed New York trust company that undergoes regular bank exams and is subject to the
                cybersecurity audits conducted by the New York Department of Financial Services.
                <span class="underline">Learn more</span> about our commitment to security.
              </p>
            </LandingListItem>
            <LandingListItem title="Hardware security keys">
              <p class="text-sm text-gray-700 leading-relaxed">
                With NEFA you can secure your account with a hardware security key via WebAuthn.
              </p>
            </LandingListItem>
            <LandingListItem title="SOC Certifications">
              <p class="text-sm text-gray-700 leading-relaxed">
                NEFA is <span class="underline">SOC 1 Type 2</span> and
                <span class="underline">SOC 2 Type 2</span> compliant. We are the world’s first cryptocurrency exchange
                and custodian to complete these exams.
              </p>
            </LandingListItem>
          </ul>
        </div>
      </div>
    </section>

    <!-- Getting started section -->
    <section class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full py-16 flex flex-col items-center">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">
          Get started in just a few minutes
        </h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <LandingStep v-for="step in steps" :key="step.title" :step="step" />
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
        </div>
      </div>
    </section>

    <!-- FAQ section -->
    <section class="w-full my-24">
      <BaseSection>
        <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="require('~/assets/img/faq.webp')" class="w-full" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8">
          <span class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">Support</span>
          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">Frequently asked questions</h2>

          <ul class="shadow-box">
            <BaseAccordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
          </ul>
        </div>
      </BaseSection>
    </section>

    <div class="w-full my-10 flex justify-center">
      <a
        v-smooth-scroll
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>Back to top</span>
        <ArrowUpIcon :size="20" />
      </a>
    </div>
  </div>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  data() {
    return {
      selected: 0,
      dropdownConcurency: false,
      dropdownCrypto: false,
      currencySelected: {
        img: 'country-icon/eng.png',
        name: 'USD',
      },
      currencies: [
        {
          img: 'country-icon/eng.png',
          name: 'USD',
        },
      ],
      cryptoSelected: {
        img: 'crypto-icon/bitcoin.png',
        name: 'BTC',
      },
      cryptocurrencies: [
        {
          img: 'crypto-icon/bitcoin.png',
          name: 'BTC',
        },
      ],
      trendings: [
        {
          id: 1,
          name: 'Bitcoin',
          price: 43180.13,
          logo: 'bitcoin.png',
          increase: true,
          data: [40, 35, 60, 75, 60, 75, 50],
        },
        {
          id: 2,
          name: 'Ethereum',
          price: 3480.65,
          logo: 'ethereum.png',
          increase: false,
          data: [25, 30, 60, 50, 80, 55, 80],
        },
        {
          id: 3,
          name: 'Solana',
          price: 150.2,
          logo: 'solana.png',
          increase: true,
          data: [40, 45, 40, 80, 50, 60, 35],
        },
        {
          id: 4,
          name: 'Dogecoin',
          price: 0.1572,
          logo: 'dogecoin.png',
          increase: true,
          data: [35, 70, 60, 80, 50, 60, 40],
        },
      ],
      topGainers: [
        {
          id: 1,
          name: 'PAPPAY',
          price: 0.00374,
          logo: 'pappay.png',
          increase: true,
          data: [30, 50, 45, 60, 70, 40, 45],
        },
        {
          id: 2,
          name: 'Bitcoin Asia',
          price: 0.02096,
          logo: 'bitcoin-asia.png',
          increase: true,
          data: [25, 60, 50, 60, 35, 50, 70],
        },
        {
          id: 3,
          name: 'MoonRock',
          price: 0.004907,
          logo: 'moonrock.png',
          increase: true,
          data: [40, 35, 40, 25, 50, 70, 45],
        },
        {
          id: 4,
          name: 'NinjaFloki',
          price: 0.000123,
          logo: 'ninjafloki.png',
          increase: true,
          data: [45, 35, 40, 30, 25, 45, 35],
        },
      ],
      recents: [
        {
          id: 1,
          name: 'MetaCraft',
          price: 0.0608,
          logo: 'metacraft.png',
          increase: false,
          data: [40, 50, 45, 60, 35, 40, 45],
        },
        {
          id: 2,
          name: 'Frog',
          price: 0.5875,
          logo: 'frog.png',
          increase: false,
          data: [25, 50, 45, 48, 40, 60, 45],
        },
        {
          id: 3,
          name: 'Musk Doge',
          price: 0.04041,
          logo: 'musk-doge.png',
          increase: true,
          data: [25, 35, 60, 45, 50, 45, 45],
        },
        {
          id: 4,
          name: '2SHARE',
          price: 1366.24,
          logo: '2share.png',
          increase: true,
          data: [35, 30, 60, 50, 35, 45, 40],
        },
      ],
      accordions: [
        {
          title: 'Why should I choose NEFA?',
          description:
            "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
        {
          title: 'How secure is NEFA?',
          description:
            "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
        {
          title: 'Do I have to buy a whole Bitcoin?',
          description:
            "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
        {
          title: 'How do I actually buy Bitcoin?',
          description:
            "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
      ],
      steps: [
        {
          img: 'sign-up.png',
          title: 'Sign Up',
          description:
            'Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile',
        },
        {
          img: 'fund.png',
          title: 'Fund',
          description:
            'Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet',
        },
        {
          img: 'buy-crypto.png',
          title: 'Buy Crypto',
          description:
            'Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to your friends anywhere',
        },
      ],
    }
  },
}
</script>
<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url('../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url('../assets/img/bg-trading-tools.webp');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>
