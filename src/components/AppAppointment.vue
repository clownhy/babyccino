<template>
    <!-- Appointment Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="bg-light rounded overflow-hidden">
                <div class="row g-0">
                    <div class="col-12 col-lg-6 d-flex align-items-center">
                        <div class="p-5">
                            <h1 class="mb-4">Make Appointment</h1>
                            <form @submit.prevent="submitForm">
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control border-0" id="gname"
                                                v-model="form.guardianName" placeholder="Guardian Name" />
                                            <label for="gname">Guardian Name</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control border-0" id="gmail"
                                                v-model="form.guardianEmail" placeholder="Guardian Email" />
                                            <label for="gmail">Guardian Email</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control border-0" id="cname"
                                                v-model="form.childName" placeholder="Child Name" />
                                            <label for="cname">Child Name</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control border-0" id="cage"
                                                v-model="form.childAge" placeholder="Child Age" />
                                            <label for="cage">Child Age</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control border-0" placeholder="Leave a message here"
                                                id="message" style="height: 100px" v-model="form.message"></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Submit</button>
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
                childAge: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            console.log('Form submitted:', this.form);
            alert('Form submitted! Check the console for details.');
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

@media (max-width: 768px) {
    .p-5 {
        padding: 1rem !important;
    }
}
</style>
