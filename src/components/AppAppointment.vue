<template>
    <!-- Appointment Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="bg-light rounded overflow-hidden">
                <div class="row g-0">
                    <div class="col-12 col-lg-6 d-flex align-items-center">
                        <div class="p-5">
                            <h1 class="mb-4">Make Appointment</h1>
                            <div v-if="formStatus" class="alert" :class="{'alert-success': formStatus === 'success', 'alert-danger': formStatus === 'error'}">
                                <p v-if="formStatus === 'success'">Thank you! Your appointment request has been sent. We'll contact you shortly.</p>
                                <p v-if="formStatus === 'error'">Oops! There was a problem submitting your form. Please try again later.</p>
                            </div>
                            <form v-if="formStatus !== 'success'" @submit.prevent="submitForm" ref="appointmentForm">
                                <!-- 隐藏的formspree识别字段 -->
                                <input type="hidden" name="_subject" value="New Appointment Request from Babyccino Website" />
                                <input type="text" name="_gotcha" style="display:none" />
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control border-0" id="gname"
                                                name="guardianName" v-model="form.guardianName" placeholder="Guardian Name" required />
                                            <label for="gname">Guardian Name</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control border-0" id="gmail"
                                                name="guardianEmail" v-model="form.guardianEmail" placeholder="Guardian Email" required />
                                            <label for="gmail">Guardian Email</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control border-0" id="cname"
                                                name="childName" v-model="form.childName" placeholder="Child Name" required />
                                            <label for="cname">Child Name</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-floating">
                                            <input type="date" class="form-control border-0" id="cbirthdate"
                                                name="childBirthdate" v-model="form.childBirthdate" placeholder="Child Birthdate" required />
                                            <label for="cbirthdate">Child Birthdate</label>
                                            <small class="form-text text-muted mt-1">Please select from calendar</small>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-floating">
                                            <input type="tel" class="form-control border-0" id="contact"
                                                name="contactNumber" v-model="form.contactNumber" placeholder="Contact Number" required />
                                            <label for="contact">Contact Number</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control border-0" placeholder="Leave a message here"
                                                id="message" name="message" style="height: 100px" v-model="form.message"></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit" :disabled="isSubmitting">
                                            <span v-if="isSubmitting">Sending...</span>
                                            <span v-else>Submit</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 d-flex align-items-stretch" style="min-height: 400px;">
                        <div class="position-relative w-100">
                            <div class="grid-container">
                                <div class="grid-item">
                                    <img src="@/assets/images/party1.jpg" alt="Party Image 1"
                                        class="img-fluid rounded cute-border" />
                                </div>
                                <div class="grid-item">
                                    <img src="@/assets/images/party2.jpg" alt="Party Image 2"
                                        class="img-fluid rounded cute-border" />
                                </div>
                                <div class="grid-item">
                                    <img src="@/assets/images/party3.jpg" alt="Party Image 3"
                                        class="img-fluid rounded cute-border" />
                                </div>
                                <div class="grid-item">
                                    <img src="@/assets/images/party4.jpg" alt="Party Image 4"
                                        class="img-fluid rounded cute-border" />
                                </div>
                                <div class="grid-item">
                                    <img src="@/assets/images/party5.jpg" alt="Party Image 5"
                                        class="img-fluid rounded cute-border" />
                                </div>
                                <div class="grid-item">
                                    <img src="@/assets/images/party6.jpg" alt="Party Image 6"
                                        class="img-fluid rounded cute-border" />
                                </div>
                                <div class="grid-item">
                                    <img src="@/assets/images/party7.jpg" alt="Party Image 7"
                                        class="img-fluid rounded cute-border" />
                                </div>
                                <div class="grid-item">
                                    <img src="@/assets/images/party8.jpg" alt="Party Image 8"
                                        class="img-fluid rounded cute-border" />
                                </div>
                                <div class="grid-item">
                                    <img src="@/assets/images/party9.jpg" alt="Party Image 9"
                                        class="img-fluid rounded cute-border" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Appointment End -->
</template>

<script>
export default {
    name: 'AppAppointment',
    data() {
        return {
            form: {
                guardianName: '',
                guardianEmail: '',
                childName: '',
                childBirthdate: '',
                contactNumber: '',
                message: ''
            },
            formspreeEndpoint: 'https://formspree.io/f/mblgkjpy', // Replace with your Formspree form ID
            formStatus: null,
            isSubmitting: false
        };
    },
    methods: {
        async submitForm() {
            this.isSubmitting = true;
            
            try {
                const formData = new FormData();
                // 添加表单数据
                Object.keys(this.form).forEach(key => {
                    formData.append(key, this.form[key]);
                });
                
                // 发送到Formspree
                const response = await fetch(this.formspreeEndpoint, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // 表单提交成功
                    this.formStatus = 'success';
                    // 重置表单
                    this.form = {
                        guardianName: '',
                        guardianEmail: '',
                        childName: '',
                        childBirthdate: '',
                        contactNumber: '',
                        message: ''
                    };
                } else {
                    // 表单提交失败
                    this.formStatus = 'error';
                    console.error('Form submission failed');
                }
            } catch (error) {
                this.formStatus = 'error';
                console.error('Error submitting form:', error);
            } finally {
                this.isSubmitting = false;
            }
        }
    }
};
</script>

<style scoped>
.position-relative {
    position: relative;
}

.img-fluid {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
}

.grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
}

.cute-border {
    border: 5px solid #f3d8e5;
    /* 可爱的粉红色边框 */
    border-radius: 10px;
}

.alert {
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    font-weight: 500;
}

.alert-success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.alert-danger {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}

@media (max-width: 768px) {
    .p-5 {
        padding: 1rem !important;
    }
}
</style>
