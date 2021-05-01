<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-primary shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">Puge Protocol
                                    <span>Charity built on Defi</span>
                                </h1>
                                <p class="lead  text-white">A gamified crowdfunding ecosystem giving pugs around the world a new home.</p>
                                <div class="btn-wrapper">
                                    <base-button tag="a"
                                                 href="https://t.me/pugetoken"
                                                 class="mb-3 mb-sm-0"
                                                 type="info"
                                                 target="_blank"
                                                 icon="fab fa-telegram-plane">
                                        Telegram
                                    </base-button>
                                    <base-button tag="a"
                                                 href="https://www.twitter.com/PugeToken"
                                                 class="mb-3 mb-sm-0"
                                                 type="white"
                                                 target="_blank"
                                                 icon="fab fa-twitter">
                                        Twitter
                                    </base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Actual Use Case</h6>
                                    <p class="description mt-3">Unlike other animal tokens, our project presents an actual use case that helps our namesake.</p>

                                    <base-button tag="a" href="https://pugetoken.medium.com/an-introduction-to-puge-token-6b8f236ed123#0705" target= "_blank"  type="primary" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-lock-circle-open" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">Liquidity Lock</h6>
                                    <p class="description mt-3">LP Pool is currently locked till 4/20/2069. This irreversible action guarantees a zero percent chance of a rugpull.</p>
                                    <base-button tag="a" href="https://pugetoken.medium.com/an-introduction-to-puge-token-6b8f236ed123#618e"  target= "_blank" type="danger" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-planet" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">Fair Launch</h6>
                                    <p class="description mt-3">No Presales. $PUGE launched on the Binance Smart Chain (BSC) with an initial marketcap of 10 BNB.</p>

                                    <base-button tag="a" href="https://pugetoken.medium.com/an-introduction-to-puge-token-6b8f236ed123#857c" target= "_blank" type="success" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-1 bg-gradient-warning">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container py-0">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-lg-2 ml-lg-auto">
                        <div class="position-relative pl-md-5">
                            <img src="img/cake_logo.svg" class="img-center img-fluid">
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="d-flex px-3">
                            <div>
                                <icon name="fas fa-dollar-sign" size="lg" class="bg-gradient-white" color="primary" shadow
                                      rounded></icon>
                            </div>
                            <div class="pl-4">
                                <h4 class="display-3 text-white">Buy on Pancakeswap</h4>
                                <p class="text-white">Puge is now available on Pancakeswap! Make sure you have the correct address: </p>
                                <h4 onclick="copy(this)" class="text-white" id="puge-contract-address">0x9CB36f1198E441Dfee Fa91A42E6f029319f6F07f</h4>
                            </div>
                        </div>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <div style="padding:0 !important" class="icon icon-shape bg-gradient-success shadow rounded-circle text-white">
                                      <img src = "img/cake_logo_1.svg" style="width:100%;height:100%">
                                    </div>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-success">How to Buy</h5>
                                    <p>Proceed to the address provided in the link below and connect to the wallet of your choice. Input the amount you wish to swap, click approve, and swap.</p>
                                    <a href="https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0x9cb36f1198e441dfeefa91a42e6f029319f6f07f" target="_blank" class="text-success">Link</a>
                                </div>
                            </div>
                        </card>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                  <div style="padding:0 !important" class="icon icon-shape bg-gradient-success shadow rounded-circle text-white">
                                    <img src = "img/bscscan_logo.svg" style="width:100%;height:100%">
                                  </div>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-warning">View on BSCscan</h5>
                                    <p>Our smart contract has been verified and published on BSCscan, ready for public scrutiny.</p>
                                    <a href="https://bscscan.com/token/0x9cb36f1198e441dfeefa91a42e6f029319f6f07f" target="_blank" class="text-warning">Link</a>
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-1 bg-gradient-success">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-lg pb-100">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-white">Tokenomics</h2>
                        <p class="lead text-white">Our tokenomics strikes a balance between sustainability and community ownership. Our Marketing and Yield Farming wallets are currently locked for 14 days.</p>
                    </div>
                </div>
                <div class="row row-grid mt-5">
                    <div class="col-lg-4">
                        <icon name="fas fa-coins" size="lg" gradient="white" shadow round color="success"></icon>
                        <h5 class="text-white mt-3">Total Supply</h5>
                        <p class="text-white mt-3">1,000,000</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="fas fa-tractor" size="lg" gradient="white" shadow round color="success"></icon>
                        <h5 class="text-white mt-3">Yield Farming Wallet</h5>
                        <p class="text-white mt-3">200,000 (20%)</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="fas fa-bullhorn" size="lg" gradient="white" shadow round color="success"></icon>
                        <h5 class="text-white mt-3">Marketing Wallet</h5>
                        <p class="text-white mt-3">100,000 (10%)</p>
                    </div>
                </div>
            </div>
        </section>
        <section id=timeline>
        	<h1>Roadmap</h1>
        	<p class="leader">New features will be constantly rolled out to ensure that $PUGE stays relevant in the ever-growing crypto space.</p>
        	<div class="demo-card-wrapper">
        		<div class="demo-card demo-card--step1">
        			<div class="head">
        				<div class="number-box">
        					<span>01</span>
        				</div>
        				<h2><span class="small">&nbsp;</span>Initial</h2>
        			</div>
        			<div class="body">
        				<p>$PUGE launched on Pancakeswap with a liquidity of 10 BNB. Liquidity has been locked forever via Unicrypt (until 4/20/2069).</p>
        				<img src="img/misc/success_bg.jpeg" alt="Graphic">
        			</div>
        		</div>

        		<div class="demo-card demo-card--step2">
        			<div class="head">
        				<div class="number-box">
        					<span>02</span>
        				</div>
        				<h2><span class="small">&nbsp;</span>Website</h2>
        			</div>
        			<div class="body">
        				<p>Website is deployed a week after token launch. The gamefied crowdfunding platform has been developed with an initial vault that accepts all tokens as donations.</p>
        				<img src="img/misc/success_bg.jpeg" alt="Graphic">
        			</div>
        		</div>

        		<div class="demo-card demo-card--step3">
        			<div class="head">
        				<div class="number-box">
        					<span>03</span>
        				</div>
        				<h2><span class="small">&nbsp;</span>More Vaults!</h2>
        			</div>
        			<div class="body">
        				<p>We have reached out to various clients related to the welfare of our lovely namesake. In the future, each of them will be represented by a vault.</p>
        				<img src="img/misc/ongoing_bg.jpeg" alt="Graphic">
        			</div>
        		</div>

        		<div class="demo-card demo-card--step4">
        			<div class="head">
        				<div class="number-box">
        					<span>04</span>
        				</div>
        				<h2><span class="small">&nbsp;</span>Yield Farming</h2>
        			</div>
        			<div class="body">
        				<p>Yield farming will launch once the tokens reserved for it is unlocked. Those who donate farmed $PUGE back into the vaults may enjoy a lovely surprise ;)</p>
        				<img src="img/misc/ongoing_bg.jpeg" alt="Graphic">
        			</div>
        		</div>

        		<div class="demo-card demo-card--step5">
        			<div class="head">
        				<div class="number-box">
        					<span>05</span>
        				</div>
        				<h2><span class="small">&nbsp;</span>NFT</h2>
        			</div>
        			<div class="body">
        				<p>In the future, we may look into NFT integration. Proceeds from NFT sales will go to our clients. In addition, we may incentivize donations by rewarding NFTs.</p>
        				<img src="img/misc/planned_bg.jpeg" alt="Graphic">
        			</div>
        		</div>

            <div class="demo-card demo-card--step6">
        			<div class="head">
        				<div class="number-box">
        					<span>06</span>
        				</div>
        				<h2><span class="small">&nbsp;</span>ERC Compatibility</h2>
        			</div>
        			<div class="body">
        				<p>As our project further develops, we may consider ERC integration so that donors have a choice of which network they wish to sent their donations via.</p>
        				<img src="img/misc/planned_bg.jpeg" alt="Graphic">
        			</div>
        		</div>

        	</div>
        </section>
        <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-3 bg-gradient-default shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-lg pb-300">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-white">Onboarding Clients</h2>
                        <p class="lead text-white">We welcome adoption centers and other organisations to join our charity program.</p>
                    </div>
                </div>
                <div class="row row-grid mt-5">
                    <div class="col-lg-4">
                        <icon name="ni ni-money-coins" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Crowdfunding Platform</h5>
                        <p class="text-white mt-3">Puge provides a gamefied crowdfunding platform and 100% of the proceeds will go to your organisation.</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Proper Guidance</h5>
                        <p class="text-white mt-3">Unfamiliar with crypto, we will set up the wallet on your behalf and provide assistance along the way. </p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">No Strings Attached</h5>
                        <p class="text-white mt-3">We do not ask for anything in return except for your permission to list your organization as our partner.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-0 section-contact-us">
            <div class="container">
                <div class="row justify-content-center mt--300">
                    <div class="col-lg-8">
                        <card gradient="secondary" shadow body-classes="p-lg-5">
                            <h4 class="mb-1">Want to work with us?</h4>
                            <p class="mt-0">We will contact you within 3 working days.</p>
                            <base-input class="mt-5"
                                        value
                                        placeholder="Your name"
                                        addon-left-icon="ni ni-user-run">
                            </base-input>
                            <base-input value
                                        placeholder="Email address"
                                        addon-left-icon="ni ni-email-83">
                            </base-input>
                            <base-input class="mb-4">
                                    <textarea class="form-control form-control-alternative" name="name" rows="4"
                                              cols="80" placeholder="Type a message..."></textarea>
                            </base-input>
                            <base-button type="default" round block size="lg">
                                Send Message
                            </base-button>
                        </card>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<style>
#puge-contract-address {
  font-weight: 600;
}

#puge-contract-address:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>


<script>
export default {
  name: "home",
  components: {}
};
</script>
