import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Component({
	selector: 'app-careers',
	templateUrl: './careers.component.html',
	styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
	@Input()
	initialState: BehaviorSubject<User> = new BehaviorSubject({} as User);

	@Output()
	formValuesChanged = new EventEmitter<User>();

	@Output()
	formSubmitted = new EventEmitter<User>();

	form!: FormGroup

	constructor(
		private fb: FormBuilder,
		private _snackBar: MatSnackBar,
	) { }

	ngOnInit() {
		this.initialState.subscribe(user => {
			this.form = this.fb.group({
				firstName: ['', Validators.required],
				lastName: ['', Validators.required],
				email: ['', [Validators.required, Validators.email]],
				mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
				linkedInUrl: ['', [Validators.required, Validators.pattern(/^(ftp|http|https):\/\/[^ "]+$/)]],
				portfolioUrl: ['', Validators.pattern(/^(ftp|http|https):\/\/[^ "]+$/)],
				position: ['', Validators.required],
				expectedSalary: ['', Validators.required],
				revelentExperience: ['', Validators.required],
				collegeStream: ['', Validators.required],
				graduationDegree: ['', Validators.required],
				graduationYear: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
			});
		});

		this.form.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
	}

	//onSubmit()
	onSubmit(user: User) {
		const formData = new FormData();

		formData.append('First Name', this.form.get('firstName')!.value);
		formData.append('Last Name', this.form.get('lastName')!.value);
		formData.append('Email', this.form.get('email')!.value);
		formData.append('Mobile', this.form.get('mobile')!.value);
		formData.append('LinkedIn Profile URL', this.form.get('linkedInUrl')!.value);
		formData.append('Website/Portfolio URL', this.form.get('portfolioUrl')!.value);
		formData.append('Position', this.form.get('position')!.value);
		formData.append('Expected Salary', this.form.get('expectedSalary')!.value);
		formData.append('Revelant Experience', this.form.get('revelentExperience')!.value);
		formData.append('College Stream', this.form.get('collegeStream')!.value);
		formData.append('Graduation Degree', this.form.get('graduationDegree')!.value);
		formData.append('Graduation Year', this.form.get('graduationYear')!.value);

		fetch("https://formsubmit.co/ajax/info@tcspl.asia", {
			method: "POST",
			body: formData
		})
			.then(response => response.json())
			.then(data => {
				this.formSubmitted.emit(user);
				this.openSuccessSnackBar();
			})
			.catch(error => {
				this.formSubmitted.emit(user);
				this.openFailureSnackBar();
			});
	}

	//Successful Snackbar addDoNotSellMyInfoUser() event
	openSuccessSnackBar() {
		const config = new MatSnackBarConfig();
		config.verticalPosition = 'bottom';
		config.horizontalPosition = 'center';
		config.panelClass = ['snackbar-padding'];
		config.duration = 3000;
		this._snackBar.open('Message sent!', 'Close', config);
	}

	//Failure Snackbar addDoNotSellMyInfoUser() event
	openFailureSnackBar() {
		const config = new MatSnackBarConfig();
		config.verticalPosition = 'bottom';
		config.horizontalPosition = 'center';
		config.panelClass = ['snackbar-padding'];
		config.duration = 3000;
		this._snackBar.open('Message not sent!', 'Close', config);
	}
}
