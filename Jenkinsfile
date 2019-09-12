pipeline {
    agent {
        docker {
            image 'node:10-alpine' 
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Prep') { 
            steps {
                sh 'yarn install' 
            }
        }
        stage('Build') {
            steps {
                sh 'yarn build'
            }
        }
        stage('Deliver'){
            steps{
                sh './jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}