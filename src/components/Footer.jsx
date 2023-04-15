import "../../src/App.css";

export default function Footer() {
  return (
    <footer>
      <ul className="sns-icons">
        <li>
          <a href="#">
            <i class="fa-brands fa-square-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-brands fa-square-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/kohwdev">
            <i class="fa-brands fa-square-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
