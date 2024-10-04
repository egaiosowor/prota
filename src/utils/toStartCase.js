export default function toStartCase(word){
    return word?.charAt(0).toUpperCase() + word?.slice(1).toLowerCase();
}