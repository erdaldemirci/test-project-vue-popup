<template>
  <teleport to="body">
    <div ref="modal" class="modal fade modal-xl" :class="{ show: active, 'd-block': active }" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <font-awesome-icon :icon="['fas', 'turkish-lira-sign']" class="header-price-icon" />
              Türk Lirası
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="$emit('closeModal')">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">

                <MDBTabs v-model="activeTabId1">
                  <!-- Tabs navs -->
                  <MDBTabNav fill tabsClasses="mb-3">
                    <MDBTabItem tag="button" tabId="ex1-1" href="ex1-1" class="navbar-btn">TRY YATIR</MDBTabItem>
                    <MDBTabItem tag="button" tabId="ex1-2" href="ex1-2" class="navbar-btn">TRY ÇEK</MDBTabItem>
                  </MDBTabNav>
                  <!-- Tabs navs -->
                  <!-- Tabs content -->
                  <MDBTabContent>
                    <MDBTabPane tabId="ex1-1">


                      <CustomAccordion>
                        <CustomAccordionItem>
                          <template #accordion-trigger>
                            <h3 class="accordion-trigger-h3">
                              <img class="accordion-trigger-img" src="/images/ziraat.png">
                              <font-awesome-icon :icon="['fas', 'chevron-right']" />
                            </h3>
                          </template>
                          <template #accordion-content>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                          </template>
                        </CustomAccordionItem>

                        <CustomAccordionItem>
                          <template #accordion-trigger>
                            <h3 class="accordion-trigger-h3">
                              <img class="accordion-trigger-img" src="/images/fibabanka.png">
                              <font-awesome-icon :icon="['fas', 'chevron-right']" />
                            </h3>
                          </template>
                          <template #accordion-content>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                          </template>
                        </CustomAccordionItem>

                      </CustomAccordion>


                    </MDBTabPane>
                    <MDBTabPane tabId="ex1-2">Content #2</MDBTabPane>
                  </MDBTabContent>
                  <!-- Tabs content -->
                </MDBTabs>


              </div>
              <div class="col col-r">
                <h3>Önemli Notlar:</h3>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                  <li>Suspendisse potenti. In sit amet posuere nibh.</li>
                  <li>In aliquam feugiat scelerisque.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                  <li>Suspendisse potenti. In sit amet posuere nibh.</li>
                  <li>In aliquam feugiat scelerisque.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </teleport>
</template>

<script>

import {
  MDBTabs,
  MDBTabNav,
  MDBTabContent,
  MDBTabItem,
  MDBTabPane,
} from 'mdb-vue-ui-kit';

import CustomAccordion from "../components/CustomAccordion";
import CustomAccordionItem from "../components/CustomAccordionItem";

import { ref } from 'vue';


export default {
  components: {
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
    CustomAccordion,
    CustomAccordionItem
  },
  setup() {
    const activeTabId1 = ref('ex1-1');

    return {
      activeTabId1
    };
  },
  name: "BootstrapModal",
  emits: ["closeModal"],
  props: {
    showModal: Boolean,
  },
  watch: {
    showModal: {
      handler(newVal) {
        this.active = newVal;
        const body = document.querySelector("body");
        this.showModal ? body.classList.add("modal-open") : body.classList.remove("modal-open")
      },
      immediate: true,
      deep: true,
    },
  },
  data() {
    return {
      active: this.showModal,
    };
  },
};
</script>

 
<style lang="scss" scoped>
.modal {

  background-color: rgba(0, 0, 0, 0.4);

  .modal-content {

    padding: 0 30px;


    .modal-header {

      padding-left: 0;
      padding-right: 0;

      border-bottom: 1px solid #3bc093;

      .modal-title {

        font-size: 20px;

        .header-price-icon {
          float: left;
          display: block;
          width: 16px;
          height: 16px;

          padding: 8px;
          margin-right: 10px;

          color: white;
          background-color: #f14338;

          border-radius: 50%;

        }


      }

      .close {
        position: relative;
        width: 20px;
        height: 20px;

        background: none;
        border: 1px solid black;

        border-radius: 50%;

        span {
          margin: 0;
          padding: 0;
          font-size: 16px;
          position: absolute;
          top: -3px;
          left: 5px;
        }
      }

    }

    .modal-body {

      .row {

        .col {


          &.col-r {

            border-left: 1px solid #909090;

            padding: 45px;

            ul {
              list-style: none;

              padding: 0;
              margin: 0;

              li {

                position: relative;
                display: block;
                line-height: 20px;
                padding-left: 30px;

                margin-bottom: 10px;

                text-align: left;

                &::before {
                  content: '';
                  position: absolute;
                  top: 1px;
                  left: 0;
                  display: block;
                  width: 20px;
                  height: 20px;
                  border: 1px solid #3bc093;
                  border-radius: 50%;
                }


                &::after {
                  content: '';
                  position: absolute;
                  top: 6px;
                  left: 5px;
                  display: block;
                  width: 10px;
                  height: 10px;
                  background-color: #3bc093;
                  border-radius: 50%;
                }




              }
            }

          }

          h3 {
            display: block;

            font-size: 15px;

            text-align: left;
          }


        }

      }

    }

  }

}
</style>