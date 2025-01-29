import { Component } from '@angular/core';
import { TopCreatorsComponent } from "../top-creators/top-creators.component";
import { PostFlowComponent } from "../post-flow/post-flow.component";

@Component({
  selector: 'app-dashboard-ui',
  imports: [TopCreatorsComponent, PostFlowComponent],
  templateUrl: './dashboard-ui.component.html',
  styleUrl: './dashboard-ui.component.css'
})
export class DashboardUiComponent {

}
