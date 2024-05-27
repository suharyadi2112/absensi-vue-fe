<template>
<div class="hold-transition theme-primary bg-img" :style="backgroundImageStyleBGOne">
    <div class="container h-p100">
        <div class="row align-items-center justify-content-md-center h-p100">
            <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
                
                <div class="col-sm-6 col-xxl-3">
                    <div class="card card-flush h-xl-100">
                        <div class="card-body pb-5">
                            <div class="d-flex align-items-end flex-stack mb-1">
                                <div class="text-start">
                                    <span class="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-4 d-block">List Absensi Terbaru</span> <hr/>
                                </div>
                            </div>
                            <div class="scroll-y me-n5 pe-5 h-400px" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_contacts_list_header" data-kt-scroll-wrappers="#kt_content, #kt_contacts_list_body" data-kt-scroll-stretch="#kt_contacts_list, #kt_contacts_main" data-kt-scroll-offset="5px" style="max-height: 595px;" id="list_siswa"></div>
                        </div>
                    </div>
                </div>

                <div class="col-xxl-6">
                    <div class="card card-flush h-xl-100">
                        <div class="card-body py-9">
                            <div class="row gx-9 h-100">
                                <div class="col-sm-6 mb-10 mb-sm-0">
                                    <div class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-200px h-100" id="foto" :style="backgroundImageStyleBGThree"></div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="d-flex flex-column h-100">
                                        <div class="mb-7">
                                            <div class="mb-6">
                                                <span class="text-gray-400 fs-7 fw-bold me-2 d-block lh-1 pb-1"><span id="kode">-</span></span>
                                                <span class="text-gray-800 text-hover-primary fs-1 fw-bold"><span id="nama">-</span></span>
                                            </div>
                                            <div class="d-flex align-items-center flex-wrap d-grid gap-2">
                                                <div class="d-flex align-items-center me-5 me-xl-13">
                                                    <div class="symbol symbol-30px symbol-circle me-3">
                                                        <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.3" d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z" fill="currentColor"></path>
                                                                <path d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z" fill="currentColor"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div class="m-0">
                                                        <span class="fw-semibold text-gray-400 d-block fs-8">Alamat</span>
                                                        <span class="fw-bold text-gray-800 text-hover-primary fs-7" id="alamat">-</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="symbol symbol-30px symbol-circle me-3">
                                                        <span class="symbol-label">
                                                            <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M14 18V16H10V18L9 20H15L14 18Z" fill="currentColor"></path>
                                                                    <path opacity="0.3" d="M20 4H17V3C17 2.4 16.6 2 16 2H8C7.4 2 7 2.4 7 3V4H4C3.4 4 3 4.4 3 5V9C3 11.2 4.8 13 7 13C8.2 14.2 8.8 14.8 10 16H14C15.2 14.8 15.8 14.2 17 13C19.2 13 21 11.2 21 9V5C21 4.4 20.6 4 20 4ZM5 9V6H7V11C5.9 11 5 10.1 5 9ZM19 9C19 10.1 18.1 11 17 11V6H19V9ZM17 21V22H7V21C7 20.4 7.4 20 8 20H16C16.6 20 17 20.4 17 21ZM10 9C9.4 9 9 8.6 9 8V5C9 4.4 9.4 4 10 4C10.6 4 11 4.4 11 5V8C11 8.6 10.6 9 10 9ZM10 13C9.4 13 9 12.6 9 12V11C9 10.4 9.4 10 10 10C10.6 10 11 10.4 11 11V12C11 12.6 10.6 13 10 13Z" fill="currentColor"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div class="m-0">
                                                        <span class="fw-semibold text-gray-400 d-block fs-8">Kelas</span>
                                                        <span class="fw-bold text-gray-800 text-hover-primary fs-7" id="kelas_siswa">-</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-column border border-1 border-gray-300 text-center pt-5 pb-7 mb-8 card-rounded">
                                            <span class="fw-semibold text-gray-600 fs-7 pb-1">Rincian Absensi</span>
                                            <span class="fw-bold text-gray-800 fs-2hx lh-1 pb-1" id="hari_absen">-</span>
                                            <span class="fw-bold text-gray-600 fs-4 pb-5" id="tgl_absen">-</span>
                                            <span class="fw-semibold text-gray-600 fs-7 pb-1">Jam Absensi</span>
                                            <span class="fw-bold text-gray-800 fs-3" id="jam_absen">-</span>
                                        </div>
                                        <div class="d-flex flex-stack mt-auto bd-highlight">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-xxl-3">
                    <div class="card card-flush h-xl-100">
                        <div class="card-body text-center pb-5">
                            <div class="d-flex flex-column border border-1 border-gray-300 text-center pt-5 pb-7 mb-8 card-rounded" :style="backgroundImageStyleBGThree">
                                <span style="color: white !important" class="fw-bold text-gray-800 fs-2hx lh-1 pb-1">{{ hariIni }}</span>
                                <span style="color: white !important" class="fw-bold text-gray-600 fs-4 pb-5"><!--<?php echo tanggal_indo(date('Y-m-d')) ?> --></span>
                                <span style="color: white !important" class="fw-bold text-gray-800 fs-3" id="time_now"></span>
                            </div>
                            <div class="d-flex align-items-end flex-stack mb-1">
                                <div class="text-start">
                                    <span class="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-4 d-block">Online Absensi</span>
                                </div>
                                
                            </div>
                            
                            <div class="d-flex align-items-end flex-stack mb-1 pt-5">
                                <input type="text" name="frm_code" id="frm_code" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="Masukan No Kartu">
                            </div>
                        </div>
                    
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</template>
<script>
import gambarOne from '@/assets/back-04.jpg'; // Import gambar
import gambarTwo from '@/assets/back-01.jpg'; // Import gambar
import gambarThree from '@/assets/back-031.jpg'; // Import gambar
export default {
    name: 'AbsensiView',
    data() {
        return {
            backgroundImageStyleBGOne: {
                backgroundImage: `url(${gambarOne})`
            },
            backgroundImageStyleBGTwo: {
                backgroundImage: `url(${gambarTwo})`
            },
            backgroundImageStyleBGThree: {
                backgroundImage: `url(${gambarThree})`
            },
            hariIni: '',
        };
    },
    created() {
        this.hariIni = this.getHariIni();
    },
    methods: {
        getHariIni() {
            const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
            const tanggal = new Date();
            return hari[tanggal.getDay()];
        }
    }
}
</script>

<style src="@/assets/absensi.css"></style> 
<style src="@/assets/style.css"></style> 
<style src="@/assets/skin_color.css"></style> 
<style src="@/assets/plugins.bundle.css"></style> 
<style src="@/assets/style.bundle.css"></style> 