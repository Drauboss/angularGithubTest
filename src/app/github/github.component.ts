import { Component, OnInit } from '@angular/core';
import { Octokit } from '@octokit/rest';
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";
import { MatDialog } from '@angular/material/dialog';
import { ApiKeyDialogComponent } from '../api-key-dialog/api-key-dialog.component';
import { GithubApiService } from '../github-api.service';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})


export class GithubComponent implements OnInit {
  commits: any;
  repos: any;

  token = '';


  octokit!: Octokit;



  isElementVisible: boolean = false;

  buttons: Array<any> = [];
  commitData: Array<any> = [];
  reposArray: Array<any> = [];

  constructor(private dialog: MatDialog,
    private dialogService: GithubApiService) { }


  ngOnInit() {
    console.log('GithubComponent.ngOnInit()');
    if (!this.dialogService.isDialogOpened()) {
      this.openApiKeyDialog();
      this.dialogService.setDialogOpened(true);
      
    } else {
      this.init();
    }


  }


  init() {
    this.token = this.dialogService.getToken();
    this.octokit = new Octokit({ auth: this.token });
    console.log(this.token, "dsaaaaaaaaaaaaaaaaaaadasdad");
    this.getRepos();
  }

  openApiKeyDialog() {
    const dialogRef = this.dialog.open(ApiKeyDialogComponent, {
      width: '100%',

    });

    dialogRef.afterClosed().subscribe(result => {
      // Hier können Sie die Logik implementieren, um mit dem geschlossenen Dialog-Ergebnis umzugehen
      this.dialogService.setToken(result);
      this.token = this.dialogService.getToken();

      this.init();



      console.log('Dialog-Ergebnis:', result);
    });
  }

  handleClick2(buttonId: number, buttonLabel: string) {
    // Aktion ausführen, wenn ein Button geklickt wird
    console.log('Button', buttonId, 'wurde geklickt!');
    this.getAllCommitMessages('Drauboss', buttonLabel).then(commitMessages => {
      this.commits = commitMessages;
    });


    this.getAllCommits('Drauboss', buttonLabel);


    this.commitData[0].author = this.commitData[0].author.filter((element: any, index: any) => {
      return this.commitData[0].author.indexOf(element) === index;
    });

    this.commitData[0].author = [];

  }

  toggleElementVisibility() {
    this.isElementVisible = !this.isElementVisible;
  }

  async getRepos() {
    const response = await this.octokit.rest.repos.listForAuthenticatedUser();

    this.repos = response.data;
    console.log(this.repos);

    this.repos.forEach((repo: { name: any; id: any; }) => {
      this.buttons.push({ label: repo.name, id: repo.id });
      this.reposArray.push(repo)
    });

    return this.repos

  }

  async getAllCommitMessages(owner: any, repo: any) {
    try {
      const response = await this.octokit.rest.repos.listCommits({ owner: owner, repo: repo });

      // Extrahiere nur die Commit-Nachrichten
      const commitMessages = response.data.map(commit => commit.commit.message);
      return commitMessages;
    } catch (error) {
      console.error('Fehler beim Abrufen der Commit-Nachrichten:', error);
      return [];
    }
  }

  async getAllCommits(owner: any, repo: any) {
    try {
      const response = await this.octokit.rest.repos.listCommits({ owner: owner, repo: repo });

      this.commitData = []
      // Extrahiere nur die Commit-Nachrichten
      const committerName = response.data.map(commit => commit.commit.committer?.name);
      const committerDate = response.data.map(commit => commit.commit.committer?.date);
      const committerMail = response.data.map(commit => commit.commit.committer?.email);

      this.commitData.push({ author: committerName, email: committerMail, date: committerDate })
      console.log(this.commitData[0].author)
      return this.commitData;
    } catch (error) {
      console.error('Fehler beim Abrufen der Commit-Nachrichten:', error);
      return [];
    }
  }




  handleClick() {
    this.toggleElementVisibility();
  }
}
