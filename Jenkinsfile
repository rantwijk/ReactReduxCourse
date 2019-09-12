pipeline {
    agent {
        docker {
            image 'node:12-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Prep') { 
            steps {
                sh 'yarn install' 
            }
        }
        stage('Build') {
            steps {
                'yarn build'
            }
        }
        stage('Deploy'){
            steps{
                'yarn start'
            }
        }
    }
}